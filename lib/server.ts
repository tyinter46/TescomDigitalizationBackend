import http from 'http';
import logger from './config/logger';
import app, { PORT } from './config/app';
 import importUsers from './scripts/importUsersToElastic';

http.createServer(app).listen(PORT, () => {
  importUsers();
  console.log(`Connected to ${PORT}`)
  logger.info(`Express server listening on port ${PORT} `);
});
