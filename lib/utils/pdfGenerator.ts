import { Response } from 'express';
import CommonService from '../modules/common/service';
import PDFDocument from 'pdfkit';

interface pdfOptions {
  content: (doc: typeof PDFDocument) => void;
  filename: string;
}

export const generatePdf = ({ content, filename }: pdfOptions, res: Response) => {
  try {
    const doc = new PDFDocument();
    res.header('Content-Type', 'application/pdf');
    res.attachment(filename);
    doc.pipe(res);
    content(doc);
    doc.end();
  } catch (error) {
    CommonService.UnprocessableResponse('Failed to generate PDF', res);
  }
};
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
