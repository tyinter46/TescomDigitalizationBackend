import PDFDocument from 'pdfkit';
import { Response } from 'express';
import fs from 'fs';
import path from 'path';

/**
 * Generates and downloads a PDF file.
 * @param {string} fileName - The name of the file to be downloaded.
 * @param {string} title - The title of the document.
 * @param {string} content - The content of the document.
 * @param {object} res
 */
// export const generateAndDownloadPDF = (
//   fileName: string,
//   title: string,
//   content: string,
//   res: Response
// ) => {
//   // Create a new PDF document
//   const doc = new PDFDocument({ size: 'A4' });

//   // Set headers
//   res.setHeader('Content-disposition', 'attachment; filename=postingLetter.pdf');
//   res.setHeader('Content-type', 'application/pdf');
//   const watermarkPath = path.join(__dirname, 'OGLOGOBG.png'); // Replace with your image path
//   console.log(watermarkPath);
//   // Pipe the document to the response
//   doc.pipe(res); // Pipe the PDF to a writable stream

//   const filePath = `./${fileName}`;
//   const stream = fs.createWriteStream(filePath);
//   doc.pipe(stream);

//   if (watermarkPath) {
//     doc
//       .opacity(0.3)
//       .image(watermarkPath, {
//         fit: [500, 700], // Scale the watermark image to fit within the page dimensions
//         align: 'center', // Aligns the watermark to the center horizontally
//         valign: 'center', // Aligns the watermark to the center vertically
//       })
//       .opacity(1); // Reset opacity for other content
//   }
//   // Add content to the PDF
//   doc.fontSize(25).text(title, { align: 'center' });
//   doc.moveDown();
//   doc.fontSize(14).text(content, { align: 'left' });

//   // Finalize the PDF and end the stream
//   doc.end();

//   // When the file is finished writing, trigger download
//   stream.on('finish', () => {
//     console.log(`PDF generated and saved as ${fileName}`);
//   });
// };
export const generateAndDownloadPDF = (
  fileName: string,
  title: string,
  content: string,
  res: Response
) => {
  // Create a new PDF document
  const doc = new PDFDocument({ size: 'A4' });

  // Set headers
  res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
  res.setHeader('Content-type', 'application/pdf');

  const logoPath = path.join(__dirname, 'OGLOGO.png'); // Path to the logo image
  const signaturePath = path.join(__dirname, 'signature.png'); // Path to the signature image
  const watermarkPath = path.join(__dirname, 'OGLOGOBG.png'); // Path to the watermark

  // Pipe the document to the response and file stream
  doc.pipe(res);
  const stream = fs.createWriteStream(`./${fileName}`);
  doc.pipe(stream);

  // Add watermark if it exists
  if (watermarkPath) {
    doc
      .opacity(0.3)
      .image(watermarkPath, {
        fit: [500, 700],
        align: 'center',
        valign: 'center',
      })
      .opacity(1); // Reset opacity for other content
  }

  // Add logo at the top header
  if (logoPath) {
    doc.image(logoPath, 50, 20, {
      fit: [100, 100], // Adjust the size of the logo as needed
      align: 'center', // Center the logo horizontally (optional)
    });
  }

  // Move down a bit after the logo
  doc.moveDown(4);

  // Add two lines of heading text with different colors
  // First line in army green
  doc.fillColor('green').fontSize(25).text('First Line of Heading', { align: 'center' });

  // Second line in purple
  doc
    .moveDown(0.5)
    .fillColor('purple')
    .fontSize(20)
    .text('Second Line of Heading', { align: 'center' });

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

  stream.on('finish', () => {
    console.log(`PDF generated and saved as ${fileName}`);
  });
};
