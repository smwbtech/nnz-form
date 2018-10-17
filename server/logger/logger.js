const winston = require('winston');
const { combine, timestamp, label, prettyPrint } = winston.format;
const path = require('path');

const transports = {
    console: new winston.transports.Console({
        json: true,
        colorize: true,
        timestamp: true
    }),

    fileCombined: new winston.transports.File({
        filename: (path.resolve('./logger') + '/files/info.log'),
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        level: 'info'
    }),

    fileError: new winston.transports.File({
        filename: (path.resolve('./logger') + '/files/errors.log'),
        json: true,
        maxsize: 5242880, // 5MB
        maxFiles: 5,
        colorize: false,
        level: 'error'
    }),
};



const logger = winston.createLogger({
    format: combine(
        timestamp(),
        prettyPrint()
    ),
    transports: [
      transports.console,
      transports.fileError
  ],
    exitOnError: false,
});

logger.stream = {
    write: function(message, encoding) {
    logger.info(message);
    },
};

module.exports = logger;
