import http from 'http';
import logger from './config/logger';
import app, { PORT } from './config/app';
import ExistingStaffService from './modules/existingStaff/service';

http.createServer(app).listen(PORT, () => {
  logger.info(`Express server listening on port ${PORT} `);
//  logger.info( new ExistingStaffService().getAllStaff())

});
