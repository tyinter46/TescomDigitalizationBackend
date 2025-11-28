// 

// console.log('[SERVER] Starting server initialization...');

import http from 'http';
import logger from './config/logger';

// console.log('[SERVER] Logger imported');

let app;
let PORT;

try {
  // console.log('[SERVER] Importing app config...');
  const appModule = require('./config/app');
  app = appModule.default;
  PORT = appModule.PORT;
  // console.log('[SERVER] App config imported successfully, PORT:', PORT);
} catch (err) {
  console.error('[SERVER] CRITICAL ERROR importing app:', err);
  process.exit(1);
}

<<<<<<< HEAD
// console.log('[SERVER] Importing importUsers script...');
import importUsers from './scripts/importUsersToElastic';
=======
console.log('[SERVER] Importing importUsers script...');
// import importUsers from './scripts/importUsersToElastic';
>>>>>>> 335fa73b2a9830534b6963588b607e29eed3a5f0

// console.log('[SERVER] All imports successful, creating HTTP server...');
const server = http.createServer(app);

server.listen(PORT, async () => {
  // console.log(`✓ Server connected to port ${PORT}`);
  logger.info(`Express server listening on port ${PORT}`);
  
  try {
<<<<<<< HEAD
    // console.log('[SERVER] Starting user import...');
    await importUsers();
=======
    console.log('[SERVER] Starting user import...');
    // await importUsers();
>>>>>>> 335fa73b2a9830534b6963588b607e29eed3a5f0
    console.log('[SERVER] User import completed');
  } catch (err) {
    // console.error('[SERVER] Error importing users:', err);
    logger.error('Error importing users to Elasticsearch:', err);
  }
});

server.on('error', (err) => {
  // console.error('[SERVER] Server error:', err);
  logger.error('Server error:', err);
});

process.on('uncaughtException', (err) => {
  // console.error('[SERVER] Uncaught Exception:', err);
  logger.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  // console.error('[SERVER] Unhandled Rejection:', reason);
  logger.error('Unhandled Rejection:', reason);
});