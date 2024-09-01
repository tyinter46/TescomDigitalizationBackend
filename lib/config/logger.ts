import { createLogger, format as _format, transports as _transports } from 'winston';

const logFormat = _format.combine(
  _format.colorize(),
  _format.timestamp(),
  _format.printf(({ timestamp, level, message, service }) => {
    return `[${timestamp}] ${service ?? ''} ${level}: ${message}`;
  })
);

const logger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    new _transports.File({ filename: 'error.log', level: 'error' }),
    new _transports.File({ filename: 'combined.log' }),
  ],
  exceptionHandlers: [new _transports.File({ filename: 'error.log' })],
  rejectionHandlers: [new _transports.File({ filename: 'error.log' })],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new _transports.Console({
      format: logFormat,
    })
  );
}

export default logger;
