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
export const generateAndDownloadPDF = (
  fileName: string,
  title: string,
  content: string,
  res: Response
) => {
  // Create a new PDF document
  const doc = new PDFDocument({ size: 'A4' });

  // Set headers
  res.setHeader('Content-disposition', 'attachment; filename=postingLetter.pdf');
  res.setHeader('Content-type', 'application/pdf');
  const watermarkPath = path.join(__dirname, 'OGLOGOBG.png');; // Replace with your image path
console.log(watermarkPath)
  // Pipe the document to the response
  doc.pipe(res); // Pipe the PDF to a writable stream

  const filePath = `./${fileName}`;
  const stream = fs.createWriteStream(filePath);
  doc.pipe(stream);

  if (watermarkPath) {
    doc
      .opacity(0.3)
      .image(watermarkPath, {
        fit: [500, 700], // Scale the watermark image to fit within the page dimensions
        align: 'center', // Aligns the watermark to the center horizontally
        valign: 'center', // Aligns the watermark to the center vertically
      })
      .opacity(1); // Reset opacity for other content
  }
  // Add content to the PDF
  doc.fontSize(25).text(title, { align: 'center' });
  doc.moveDown();
  doc.fontSize(14).text(content, { align: 'left' });

  // Finalize the PDF and end the stream
  doc.end();

  // When the file is finished writing, trigger download
  stream.on('finish', () => {
    console.log(`PDF generated and saved as ${fileName}`);
  });
};

// import { Response } from 'express';
// import CommonService from '../modules/common/service';
// import PDFDocument from 'pdfkit';

// interface pdfOptions {
//   createPdfContent: (doc: typeof PDFDocument) => void;
//   // content: string;
//   filename: string;
// }
// const createPdfContent = (doc: typeof PDFDocument) => {
//   doc.fontSize(16).text('Staff Posting Details', {
//     align: 'center',
//     underline: true,
//   });

//   doc.moveDown();
//   doc.fontSize(12).text(`Name: ade`);
//   doc.moveDown();
//   doc.text(`Current School: ade`);
//   doc.moveDown();
//   doc.text(`New School:`);
//   doc.moveDown();
// };

// export const generatePdf = ({ createPdfContent, filename }: pdfOptions, res: Response) => {
//   try {
//     const doc = new PDFDocument();
//     res.header('Content-Type', 'application/pdf');
//     res.attachment(filename);
//     doc.pipe(res);
//     createPdfContent(doc);
//     // content(doc);
//     doc.end();
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     CommonService.UnprocessableResponse('Failed to generate PDF', res);
//   }
// };

// import { Response } from 'express';
// import PDFDocument from 'pdfkit'; // For PDF generation
// import mongoose from 'mongoose'; // For MongoDB integration

// interface LetterData {
//   name: string;
//   school: string;
//   newSchool: string;
//   position: string;
// // Add other fields as needed
// }

// import React from 'react';
// import axios from 'axios';

// const GeneratePostingLetter: React.FC<{ teacherId: string }> = ({ teacherId }) => {
//   const handleDownload = async () => {
//     try {
//       const response = await axios.get(`/api/generate-posting-letter/${teacherId}`, { responseType: 'blob' });
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', 'posting_letter.pdf');
//       document.body.appendChild(link);
//       link.click();
//     } catch (error) {
//       console.error('Error downloading posting letter:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={handleDownload}>Download Posting Letter</button>
//     </div>
//   );
// };

// export default GeneratePostingLetter;
