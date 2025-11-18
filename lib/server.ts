import http from 'http';
import logger from './config/logger';
import app, { PORT } from './config/app';
import importUsers from './scripts/importUsersToElastic';

const server = http.createServer(app);

server.listen(PORT, async () => {
  console.log(`Connected to ${PORT}`);
  logger.info(`Express server listening on port ${PORT}`);
  
  try {
    // Run import users script, but don't crash if it fails
    await importUsers();
  } catch (err) {
    logger.error('Error importing users to Elasticsearch:', err);
    // Don't exit - server should still run even if import fails
  }
});

// Graceful error handling
process.on('uncaughtException', (err) => {
  console.log(err)
  logger.error('Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason)
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1);
});