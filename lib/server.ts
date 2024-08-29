import http from 'http';
import logger from './config/logger';
import app, { PORT } from './config/app';
import { generateAndDownloadPDF } from '../lib/utils/pdfGenerator';

http.createServer(app).listen(PORT, () => {
  // Example usage
  const fileName = 'example.pdf';
  const title = 'My PDF Title';
  const content = 'This is some example content in the PDF document.';

  // generateAndDownloadPDF(fileName, title, content);

  logger.info(`Express server listening on port ${PORT} `);
});
