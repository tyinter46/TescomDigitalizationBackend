import PDFDocument from 'pdfkit';
import { PassThrough } from 'stream';
import path from 'path';
import logger from '../config/logger';
import UserService from '../modules/users/service';
import { IUser } from '../modules/users/model';
import { v2 as cloudinary } from 'cloudinary';
import CommonService from '../modules/common/service';
import { response, Response } from 'express';
import PostingReportService from '../modules/postingReports/service';
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
    const buffers: Buffer[] = [];

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
    passThroughStream.on('data', (chunk: Buffer) => {
      buffers.push(chunk);
    });
    passThroughStream.on('end', () => {
      const totalLength = buffers.reduce((acc, buf) => acc + buf.length, 0);
      const result = new Uint8Array(totalLength);
      let offset = 0;
      for (const buf of buffers) {
        result.set(buf, offset);
        offset += buf.length;
      }
      resolve(Buffer.from(result));
    });
    passThroughStream.on('error', reject);

    // Add content to the PDF
    // const logoPath = path.join(__dirname, 'ogunlogohd.png'); // Path to the logo image
    // const signaturePath = path.join(__dirname, 'signature.png'); // Path to the signature image


// const logoPath = path.join(process.cwd(), 'public', 'assets', 'ogunlogohd.png');
// const signaturePath = path.join(process.cwd(), 'public', 'assets','signature.png'); 

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

    const logo = await fetchImageFromUrl(logoPath);
    const signature = await fetchImageFromUrl(signaturePath);
    // Get the page dimensions
    const pageWidth = doc.page.width;
    const pageHeight = doc.page.height;

    // Set the desired logo dimensions
    const logoWidth = 60;
    const logoHeight = 60;
    const signatureWidth = 180;

    // Calculate the position for top center
    const x = (pageWidth - logoWidth) / 2;
    const y = 10; // Adjust this value to move the logo up or down
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

    doc.moveDown(3);
    doc
      .fillColor('black')
      .font('arialnarrow')
      .fontSize(13)
      .text('TSC/29/Vol.IV/', { align: 'left' });
    doc.text('9th September, 2024', { align: 'right' });

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
    doc.moveDown(3);
    if (signature) {
      const a = 500;
      doc.image(signature, z, a, {
        fit: [100, 50], // Adjust the size of the signature image as needed
        align: 'right', // Adjust alignment if needed
      });
    }
    doc.moveDown(2);
    doc
      .fillColor('black')
      .font('arialnarrow_bold')
      .fontSize(12)
      .text('Afolabi Abiodun F. (Mrs.)', { align: 'right' })
      .fillColor('black')
      .font('arialnarrow_italic')
      .fontSize(12)
      .text('for: Permanent Secretary', { align: 'right' });
    // Finalize the PDF and end the stream
    doc.end();
  });
};

/**
 * Generates and uploads a posting letter for a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<string | null>} - The URL of the uploaded PDF, or null if the user is not found.
 */
export const generateAndUploadPostingLetter = (userId: string): Promise<string | null> => {
  const userService = new UserService();

  return new Promise((resolve, reject) => {
    // Find the user
    try {
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
          resolve(null); // Resolve with null if no user is found
        }

        // Prepare PDF content
        const fileName = `${user.staffName?.firstName} POSTING LETTER.pdf`;

        let title: string;
        if (user.position === 'Principal' && user.staleOrNew === 'New') {
          title = `APPOINTMENT AS PRINCIPAL`;
        }
        if (user.position === 'Vice-Principal' && user.staleOrNew === 'New') {
          title = `APPOINTMENT AS VICE-PRINCIPAL`;
        }
        if (user.position === 'Principal' && user.staleOrNew === 'Stale') {
          title = `REDEPLOYMENT OF PRINCIPAL`;
        }
        if (user.position === 'Vice-Principal' && user.staleOrNew === 'Stale') {
          title = `REDEPLOYMENT OF VICE-PRINCIPAL`;
        }
        const letterData = {
          name: user?.staffName?.firstName ?? 'Unknown',
          newSchool: user?.schoolOfPresentPosting?.nameOfSchool ?? 'Unknown',
          position: user?.position ?? 'Unknown',
          previousSchool: user?.schoolOfPreviousPosting?.nameOfSchool,
        };
        console.log(letterData);
        const postingReport = new PostingReportService();

        postingReport.createPostingReport({
          staffDetails: user?.staffName?.firstName ?? 'Unknown',
          sourceSchool: user?.schoolOfPreviousPosting?.nameOfSchool ?? 'Unknown',
          destinationSchool: user?.schoolOfPresentPosting?.nameOfSchool ?? 'Unknown',
          dateOfPreviousSchoolPosting: user?.dateOfPresentSchoolPosting ?? new Date(),
          dateOfNewSchoolPosting: new Date().toLocaleDateString(),
          previousPosition: user?.position ?? 'Unknown',
          newPosition: user?.position ?? 'Unknown',
          staleOrNew: user?.staleOrNew ?? 'Unknown',
        });
        // let letterContent: string;
        // const letterData = {
        //   name: user.staffName?.firstName ?? 'Unknown ',
        //   newSchool:
        //     user.schoolOfPresentPosting?.nameOfSchool ??
        //     'Unknown Please contact headquarters you will get your letter',
        //   position:
        //     user?.position ??
        //     'Unknown Unknown Please contact headquarters headquarters you will get your letter',
        //   previousSchool: user?.ward,
        // };
        const generateLetterContent = (user: IUser): string => {
          if (!user) return void CommonService.insufficientParameters(response as Response);
          if (
            (letterData.position === 'Principal' || letterData.position === 'Vice-Principal') &&
            user.staleOrNew === 'New'
          ) {
            return `          I am directed to inform you that the Ogun State Teaching Service Commission has approved your appointment as the ${
              letterData.position
            } of ${letterData.newSchool}, ${user?.schoolOfPresentPosting?.category},  ${
              user?.schoolOfPresentPosting?.location
            } with effect from ${
              '6th March, 2025'
              //  user?.position === 'Principal' ? '30th July, 2024' : '31st July, 2024'
            }.
    
          2.      Kindly ensure that you handover all school documents and materials in your care to your Principal before leaving.
    
          3.      Congratulations on this well-deserved elevation.`;
          }

          if (letterData?.position === 'Vice-Principal' && user?.staleOrNew === 'Stale') {
            return `             I am directed to inform you that the Teaching Service Commission has approved your redeployment from ${user?.schoolOfPreviousPosting?.nameOfSchool}, ${user?.schoolOfPreviousPosting?.category}, ${user?.schoolOfPreviousPosting?.location}  to ${letterData.newSchool} ${user?.schoolOfPresentPosting?.category},   ${user?.schoolOfPresentPosting?.location}  with immediate effect.
    
          2.    Kindly ensure a strict compliance and proper handing over of all the school materials in your possession to your principal immediately.
    
          3.    Please, you are to forward to the Commission the evidence of assumption of duty not later than two(2) weeks of the assumption at the new office.
    
          4.    Thank you.`;
          }

          if (letterData?.position === 'Principal' && user?.staleOrNew === 'Stale') {
            return `            I am directed to inform you that the Ogun State Teaching Service Commission has approved your redeployment from ${user?.schoolOfPreviousPosting?.nameOfSchool}, ${user?.schoolOfPreviousPosting?.category}, ${user?.schoolOfPreviousPosting?.location}   to ${letterData.newSchool} ${user?.schoolOfPresentPosting?.category},  ${user?.schoolOfPresentPosting?.location} with immediate effect.
    
          2.    Kindly ensure proper handing over before leaving.
    
          3.    Many thanks`;
          }

          return '';
        };
        const letterContent = generateLetterContent(user);
        // Generate and upload the PDF
        //
        generateAndDownloadPDF(user, fileName, title, letterContent)
          .then((pdfBuffer) => {
            // Upload the PDF buffer to Cloudinary using the .upload function
            return new Promise<any>((resolve, reject) => {
              // Convert the buffer to a base64 encoded string
              const base64String = `data:application/pdf;base64,${pdfBuffer.toString('base64')}`;

              // Upload the base64 string using the .upload function
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
              //     cloudinary.uploader.unsigned_upload(
              //       base64String,
              //       'ml_default',

              //       (error, result) => {
              //         if (error) {
              //           return reject(error); // Reject on upload error
              //         }
              //         resolve(result); // Resolve with upload result
              //       }
              //     );
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
                  reject(err); // Reject if there's an error updating the user
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
