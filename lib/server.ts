// // 

// // console.log('[SERVER] Starting server initialization...');

// import http from 'http';
// import logger from './config/logger';

// // console.log('[SERVER] Logger imported');

// let app;
// let PORT;

// try {
//   // console.log('[SERVER] Importing app config...');
//   const appModule = require('./config/app');
//   app = appModule.default;
//   PORT = appModule.PORT;
//   // console.log('[SERVER] App config imported successfully, PORT:', PORT);
// } catch (err) {
//   console.error('[SERVER] CRITICAL ERROR importing app:', err);
//   process.exit(1);
// }

// // console.log('[SERVER] Importing importUsers script...');
// import importUsers from './scripts/importUsersToElastic';
// import UserService from '../lib/modules/users/service';
// import importSchoolsToElastic from './scripts/importSchoolsToElastic';
// import SchoolService from '../lib/modules/schools/service';
// // console.log('[SERVER] All imports successful, creating HTTP server...');
// const server = http.createServer(app);

// server.listen(PORT, async () => {
//   // console.log(`✓ Server connected to port ${PORT}`);
//   logger.info(`Express server listening on port ${PORT}`);
  
//   try {
//     // console.log('[SERVER] Starting user import...');
//     const userService = new UserService
//     const schoolService = new SchoolService

//     // await schoolService.addFieldsToAllSchools()
//    // await userService.addFieldsToAllUsers()
//     await importSchoolsToElastic()
//      await importUsers();
//     console.log('[SERVER] User import completed');
//   } catch (err) {
//     // console.error('[SERVER] Error importing users:', err);
//     logger.error('Error importing users to Elasticsearch:', err);
//   }



// server.on('error', (err) => {
//   // console.error('[SERVER] Server error:', err);
//   logger.error('Server error:', err);
// });

// process.on('uncaughtException', (err) => {
//   // console.error('[SERVER] Uncaught Exception:', err);
//   logger.error('Uncaught Exception:', err);
// });

// process.on('unhandledRejection', (reason, promise) => {
//   // console.error('[SERVER] Unhandled Rejection:', reason);
//   logger.error('Unhandled Rejection:', reason);
// })
// })


import http from 'http';
import logger from './config/logger';

import importUsers from './scripts/importUsersToElastic';
import importSchoolsToElastic from './scripts/importSchoolsToElastic';

// ---- LOAD APP CONFIG ----
let app;
let PORT: number | string;

try {
  const appModule = require('./config/app');
  app = appModule.default;
  PORT = appModule.PORT;
} catch (err) {
  logger.error('[SERVER] Failed to load app config', err);
  process.exit(1);
}

// ---- VALIDATE PORT ----
if (!PORT) {
  logger.error('[SERVER] PORT is not defined');
  process.exit(1);
}

// ---- CREATE SERVER ----
const server = http.createServer(app);

// ---- START SERVER (NON-BLOCKING) ----
server.listen(PORT, () => {
  logger.info(`✓ Express server listening on port ${PORT}`);

  /**
   * IMPORTANT:
   * Run imports AFTER server is up
   * Fire-and-forget (do NOT await)
   */
  runStartupImports();
});

// ---- STARTUP IMPORTS (SAFE) ----
async function runStartupImports() {
  try {
    logger.info('[STARTUP] Running Elasticsearch imports...');
    await importSchoolsToElastic();
    await importUsers();
    logger.info('[STARTUP] Elasticsearch imports completed');
  } catch (err) {
    /**
     * DO NOT exit the process
     * Log and continue running the API
     */
    logger.error('[STARTUP] Elasticsearch import failed', err);
  }
}

// ---- SERVER ERROR HANDLING ----
server.on('error', (err) => {
  logger.error('Server error:', err);
});

// ---- PROCESS SAFETY NETS ----
process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason) => {
  logger.error('Unhandled Rejection:', reason);
});
