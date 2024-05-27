import http from 'http';
import logger from './config/logger';
import app, { PORT } from './config/app';
// import {uploadImage} from './utils/cloudinary'

http.createServer(app).listen(PORT, () => {
  // uploadImage()
  logger.info(`Express server listening on port ${PORT} `);
});
