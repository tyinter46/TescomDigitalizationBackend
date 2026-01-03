import dotenv from 'dotenv';
dotenv.config();
import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';
import path from 'path';
import logger from '../config/logger';
import UserService from '../modules/users/service';
import { IUser } from '../modules/users/model';
import { v2 as cloudinary } from 'cloudinary';
import CommonService from '../modules/common/service';
import { response, Response } from 'express';
import axios from 'axios';
/**
 * Generates a PDF file and returns it as a buffer.
 * @param {IUser} user - The user object containing relevant data for the PDF.
 * @param {string} fileName - The name of the file.
 * @param {string} title - The title of the document.
 * @param {string} content - The content of the document.
 * @returns {Promise<Buffer>} - The PDF file as a buffer.
 */


export const generateAndDownloadPDF = (
  user: IUser,
  fileName: string,
  title: string,
  content: string
): Promise<Buffer> => {
  return new Promise(async (resolve, reject) => {
    const doc = new PDFDocument({ size: 'A4' });
    const buffers: Uint8Array[] = [];


    const logoPath = 'https://res.cloudinary.com/dhkhxaxca/image/upload/v1764417636/fuaxe9suql03ykyihj36.png'
const signaturePath = 'https://res.cloudinary.com/dhkhxaxca/image/upload/v1764417643/jreeabexdzglxtgaytjk.png'
    // Get the page dimensions
// Function to fetch image from URL
async function fetchImageFromUrl(url: string): Promise<Buffer | null> {
  try {
    const response = await axios.get(url, { 
      responseType: 'arraybuffer' 
    });
    return Buffer.from(response.data);
  } catch (error) {
    console.error('Error fetching image:', error);
    return null; // Return null instead of throwing to allow PDF generation to continue
  }
}

const logo = await fetchImageFromUrl(logoPath)
const signature = await fetchImageFromUrl(signaturePath)
    // Create a PassThrough stream to capture the PDF output
    const passThroughStream = new PassThrough();
    const arialnarrow_bolditalicPath = path.join(__dirname, 'arialnarrow_bolditalic.ttf');
    const arialnarrow = path.join(__dirname, 'arialnarrow.ttf');
    const arialnarrow_bold = path.join(__dirname, 'arialnarrow_bold.ttf');
    const arialnarrow_italic = path.join(__dirname, 'arialnarrow_italic.ttf');

    // Pipe the document to the PassThrough stream
    doc.pipe(passThroughStream);
    doc.registerFont('arialnarrow_bolditalic', arialnarrow_bolditalicPath);
    doc.registerFont('arialnarrow', arialnarrow);
    doc.registerFont('arialnarrow_bold', arialnarrow_bold);
    doc.registerFont('arialnarrow_italic', arialnarrow_italic);
    // Collect chunks of data from the PassThrough stream
    passThroughStream.on('data', (chunk) => buffers.push(chunk));
    passThroughStream.on('end', () => resolve(Buffer.concat(buffers)));
    passThroughStream.on('error', reject);

    // Add content to the PDF
   
    // Get the page dimensions
    // const logoPath = path.join(__dirname, 'ogunlogohd.png'); // Path to the logo image
    // const signaturePath = path.join(__dirname, 'signature.png'); // Path to the signature image
    // // Get the page dimensions
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    // Set the desired logo dimensions
    const logoWidth = 60;
    const logoHeight = 60;
    const signatureWidth = 180;

    // Calculate the position for top center
    const x = (pageWidth - logoWidth) / 2;
    const y = 20; // Adjust this value to move the logo up or down
    const z = 400;

    // Add logo at the top header
    if (logo) {
      doc.image(logo, x, y, {
        fit: [50, 50], // Adjust the size of the logo as needed
        align: 'right', // Center the logo horizontally (optional)
        valign: 'center',
      });
    }

    // Add header and other details
    doc.moveDown();
    doc
      .fillAndStroke('green', 'yellow')
      .font('arialnarrow_bold')
      .fontSize(25)
      .text('TEACHING SERVICE COMMISSION', { align: 'center' });
    doc
      .fillColor('purple')
      .fontSize(15)
      .text('P.M.B 2081. ABEOKUTA, OGUN STATE OF NIGERIA', { align: 'center' });
    doc.moveDown(1);
    doc
      .fillColor('black')
      .font('arialnarrow_bolditalic')
      .fontSize(14)
      .text('All Communications should be addressed', { align: 'left' });
    doc
      .fillColor('black')
      .font('arialnarrow_bolditalic')
      .fontSize(14)
      .text('to the Permanent Secretary', { align: 'left' });
    
    doc.moveDown(2);
    // doc.fillColor('black').font('arialnarrow_bold').fontSize(12).text( , { align: 'left' });

    doc.moveDown(3);
    doc
      .fillColor('black')
      .font('arialnarrow')
      .fontSize(13)
      .text('TSC/1039/VOL.XT2/', { align: 'left' });
    doc.text('15th December, 2025', { align: 'right' });

    // Insert user-specific content
    doc.moveDown(1);
    doc
      .fillColor('black')
      .font('arialnarrow_bold')
      .fontSize(12)
      .text(`${user?.staffName?.firstName}`, { align: 'left' });
    doc
      .fillColor('black')
      .font('arialnarrow')
      .fontSize(12)
      .text(
        `${user?.schoolOfPreviousPosting?.nameOfSchool}, ${user?.schoolOfPreviousPosting?.location}`,
        { align: 'left' }
      );
    doc.moveDown(2);

    doc.fillColor('black').font('arialnarrow_bold').fontSize(14).text(title, { align: 'center' });

    // Add content to the PDF
    doc.moveDown();
    doc.fillColor('black').font('arialnarrow').fontSize(12).text(content, { align: 'left' });
    // Add signature
  
    if (signature) {
      const a = 560;
      doc.moveDown(4);
      doc.image(signature, z, a, {
        fit: [100, 50], // Adjust the size of the signature image as needed
        align: 'right', // Adjust alignment if needed
      });
    }
 
    doc
      .fillColor('black')
      .font('arialnarrow_bold')
      .fontSize(12)
      .text('Afolabi Abiodun F. (Mrs.)', { align: 'right' })
      .fillColor('black')
      .font('arialnarrow_italic')
      .fontSize(12)
      .text('for: Permanent Secretary', { align: 'right' })

      

    // Finalize the PDF and end the stream
    doc.end();
  });
};

/**
 * Generates and uploads a posting letter for a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<string | null>} - The URL of the uploaded PDF, or null if the user is not found.
 */
export const generateAndUploadStaffPostingLetter = (userId: string): Promise<string | null> => {
  const userService = new UserService();

  return new Promise((resolve, reject) => {
    try {
      // Find the user
      userService.filterUser({ _id: userId }, (err: any, user: IUser) => {
        if (err) {
          logger.error({
            message: err.message || 'Error fetching user',
            service: 'PDF Generation and Upload',
          });
          return reject(err); // Reject if error occurs
        }

        if (!user) {
          logger.error({ message: 'User not found', service: 'PDF Generation and Upload' });
          return resolve(null); // Resolve with null if no user is found
        }

        // Prepare PDF content
        const fileName = `${user.staffName?.firstName} POSTING LETTER.pdf`;
        const title = 'POSTING OF TEACHERS';

        const letterData = {
          name: user?.staffName?.firstName ?? 'Unknown',
          newSchool: user?.schoolOfPresentPosting?.nameOfSchool ?? 'Unknown',
          cadre: user?.cadre ?? 'Unknown',
          previousSchool: user?.schoolOfPreviousPosting?.nameOfSchool,
        };

        const generateLetterContent = (user: IUser): string => {
          if (!user) {
            CommonService.insufficientParameters(response as Response);
            return ''; // Return an empty string if insufficient parameters
          }

          return `     I am directed to inform you that the Ogun State Teaching Service Commission has approved your redeployment from ${
            user?.schoolOfPreviousPosting?.nameOfSchool} ${user?.schoolOfPreviousPosting?.category} to ${user?.schoolOfPresentPosting?.nameOfSchool}, ${user?.schoolOfPresentPosting?.category} with immediate effect.

 2.    Kindly ensure a strict compliance and proper handing over of all office materials in your possession to your Principal immediately.
         
 3.    Please, you are to forward to the Commission, the evidence of assumption of duty not later than two(2) weeks of the assumption at the new School.
       
 4.    Many thanks.`;
        };

        const letterContent = generateLetterContent(user);

        // Generate and upload the PDF
        generateAndDownloadPDF(user, fileName, title, letterContent)
          .then((pdfBuffer) => {
            // Convert the buffer to a base64 encoded string
            const base64String = `data:application/pdf;base64,${pdfBuffer.toString('base64')}`;

            // Upload the base64 string using the .upload function
            return new Promise<any>((resolve, reject) => {
              cloudinary.uploader.upload(
                base64String,
                {
                  resource_type: 'raw',
                  public_id: fileName,
                  invalidate: true,
                },
                (error, result) => {
                  if (error) {
                    return reject(error); // Reject on upload error
                  }
                  resolve(result); // Resolve with upload result
                }
              );
            });
          })
          .then((uploadResult) => {
            const downloadLink = uploadResult.secure_url;
            if (!downloadLink) {
              throw new Error('Failed to generate download link.');
            }

            // Update the user's posting letter in the database
            userService.updateUser(
              { _id: userId },
              { letters: { postingLetter: downloadLink } },
              (err, updatedUser) => {
                if (err) {
                  return reject(err); // Reject if there's an error updating the user
                }
                resolve(downloadLink); // Resolve with the download link
              }
            );
          })
          .catch((error) => {
            logger.error({
              message: error.message || 'Unknown error during PDF generation or upload',
              service: 'PDF Generation and Upload',
            });
            reject(error); // Reject if any error occurs
          });
      });
    } catch (error) {
      return reject(error);
    }
  });
};
