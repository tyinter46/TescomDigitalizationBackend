import PDFDocument from 'pdfkit';
import { Response } from 'express';
import { PassThrough } from 'stream';
import path from 'path';
import logger from '../config/logger';
import CommonService from '../modules/common/service';
import UserService from '../modules/users/service';
import { IUser } from '../modules/users/model';
import { v2 as cloudinary } from 'cloudinary';

/**
 * Generates a PDF file and returns it as a buffer.
 * @param {string} fileName - The name of the file.
 * @param {string} title - The title of the document.
 * @param {string} content - The content of the document.
 * @returns {Promise<Buffer>} - The PDF file as a buffer.
 */
export const generateAndDownloadPDF = (
  fileName: string,
  title: string,
  content: string
): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4' });
    const buffers: Buffer[] = [];

    // Create a PassThrough stream to capture the PDF output
    const passThroughStream = new PassThrough();

    // Pipe the document to the PassThrough stream
    doc.pipe(passThroughStream);

    // Collect chunks of data from the PassThrough stream
    passThroughStream.on('data', (chunk) => buffers.push(chunk));
    passThroughStream.on('end', () => resolve(Buffer.concat(buffers)));
    passThroughStream.on('error', reject);

    // Add content to the PDF
    const logoPath = path.join(__dirname, 'OGLOGO.png'); // Path to the logo image
    const signaturePath = path.join(__dirname, 'signature.png'); // Path to the signature image

    // Add logo at the top header
    if (logoPath) {
      doc.image(logoPath, 50, 10, {
        fit: [50, 50], // Adjust the size of the logo as needed
        align: 'center', // Center the logo horizontally (optional)
      });
    }

    // Move down a bit after the logo
    doc.moveDown(4);

    // Add two lines of heading text with different colors
    doc.fillColor('green').fontSize(25).text(title, { align: 'center' });
    doc.moveDown(0.5);
    doc.fillColor('purple').fontSize(20).text('Second Line of Heading', { align: 'center' });

    doc.moveDown(); // Add space before the main content

    // Add content to the PDF
    doc.fillColor('black').fontSize(14).text(content, { align: 'left' });

    // Move down to where you want to place the signature within the content
    doc.moveDown(2); // Adjust the spacing to fit your layout needs

    // Insert the signature image in the content
    if (signaturePath) {
      doc.image(signaturePath, {
        fit: [100, 50], // Adjust the size of the signature image as needed
        align: 'center', // Adjust alignment if needed
      });
    }

    // Finalize the PDF and end the stream
    doc.end();
  });
};
export const generateAndUploadPostingLetter = (userId: string): Promise<string | null> => {
  // const fileName = `posting_letter_${userId}.pdf`;
  const userService = new UserService();

  return new Promise((resolve, reject) => {
    // First, find the user
    userService.filterUser({ _id: userId }, (err: any, user: IUser) => {
      if (err) {
        logger.error({
          message: err.message || 'Error fetching user',
          service: 'PDF Generation and Upload',
        });
        return reject(err); // Reject if error occurs
      }

      if (!user) {
        logger.error({
          message: 'User not found',
          service: 'PDF Generation and Upload',
        });
        return resolve(null); // Resolve with null if no user is found
      }

      // Generate PDF content
      const letterData = {
        name: user.staffName?.firstName ?? 'Unknown ',
        newSchool:
          user.schoolOfPresentPosting?.nameOfSchool ?? 'Unknown Please contact headquarters',
        position: user?.position ?? 'Unknown Unknown Please contact headquarters',
        previousSchool: user?.schoolOfPreviousPosting,
      };

      const fileName = `${user.staffName?.firstName} POSTING LETTER`;
      const title =
        user.position === 'Principal'
          ? `APPOINTMENT AS PRINCIPAL`
          : `APPOINTMENT AS VICE-PRINCIPAL`;
      const date = new Date();

      const letterContent = `
             
              I am directed to inform you that you that the Ogun State Teaching Service Commission has approved your appointment as the ${letterData.position}  to ${letterData.newSchool} with effect
      from 30th July, 2024.

      2.      Kindly ensure that you handover all school documents and materials in your care to your Principal before leaving.

      3.      Congratulations on this well-deserved elevation.

                                                              
      
      
                                                                     Mrs Afolabi Abiodun
                                                                   For: Permanent Secretary.
      `;

      // Call generateAndDownloadPDF and chain Promises
      generateAndDownloadPDF(fileName, title, letterContent)
        .then((pdfBuffer) => {
          // Upload the PDF buffer to Cloudinary
          return new Promise<any>((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream(
              { resource_type: 'raw', public_id: fileName },
              (error, result) => {
                if (error) {
                  return reject(error); // Reject on upload error
                }
                resolve(result); // Resolve with upload result
              }
            );
            uploadStream.end(pdfBuffer);
          });
        })
        .then((uploadResult) => {
          const downloadLink = uploadResult.secure_url;

          if (!downloadLink) {
            throw new Error('Failed to generate download link.');
          }
          userService.updateUser(
            { _id: userId },
            { letters: { postingLetter: downloadLink } },
            (err, updatedUser) => {
              if (err) {
                return reject(err); // Reject if there's an error updating user
              }
              resolve(downloadLink); // Resolve with download link
            }
          );
          // Return the download link after updating the user
          logger.info('PDF uploaded and user updated successfully.');
          resolve(downloadLink); // Resolve with the download link
        })
        .catch((error) => {
          // Handle errors
          logger.error({
            message: error.message || 'Unknown error during PDF generation or upload',
            service: 'PDF Generation and Upload',
          });
          reject(error); // Reject if any error occurs
        });
    });
  });
};
