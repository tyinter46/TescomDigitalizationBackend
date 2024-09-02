import * as fs from 'fs';
import * as path from 'path';
import dotenv from 'dotenv';
import Logger from '../logger/Logger';
import convict from 'convict';

const logger = new Logger('config');
dotenv.config();
const isDev = process.env.NODE_ENV === 'development';
// config schema
const configSchema = convict({
  redisOptions: {
    host: {
      doc: 'Redis server host.',
      format: String,
      default: 'localhost',
    },
    port: {
      doc: 'Redis server port.',
      format: 'port',
      default: 6379,
    },
    password: {
      doc: 'Redis server password.',
      format: String,
      default: '',
    },
  },
  cookieSecret: {
    doc: 'Session cookie secret.',
    format: String,
    default: 'tescompromolistmanagementsessionsecret',
  },
  cookieName: {
    doc: 'Session cookie name.',
    format: String,
    default: 'tescom.sid',
  },

  listeningHost: {
    doc: 'The listening Host or IP address.',
    format: String,
    default: '0.0.0.0',
  },
  listeningPort: {
    doc: 'The HTTPS listening port.',
    format: 'port',
    default: 5000,
  },
  httpOnly: {
    doc: 'Listens only on HTTP on listeningPort; listeningRedirectPort disabled. Use case: load balancer backend.',
    format: 'Boolean',
    default: isDev ? false : true, // set it to true for production
  },
  trustProxy: {
    doc: 'WebServer/Express trust proxy config for httpOnly mode. More infos: [expressjs](https://expressjs.com/en/guide/behind-proxies.html), [proxy-addr](https://www.npmjs.com/package/proxy-addr)',
    format: String,
    default: isDev ? '' : 'loopback', // Set to "loopback" if httpOnly is true
  },
});

/**
 * Formats the schema documentation, calling the same function recursively.
 * @param docs the documentation object to extend
 * @param property the root property
 * @param schema the config schema fragment
 * @returns the documentation object
 */

function formatDocs(docs: any, property: string | null, schema: any) {
  if (schema._cvtProperties) {
    Object.entries(schema._cvtProperties).forEach(([name, value]) => {
      formatDocs(docs, `${property ? `${property}.` : ''}${name}`, value);
    });

    return docs;
  }

  if (property) {
    docs[property] =
      // eslint-disable-line no-param-reassign
      {
        doc: schema.doc,
        format: JSON.stringify(schema.format, null, 2),
        default: JSON.stringify(schema.default, null, 2),
      };
  }

  return docs;
}
const configDocs = formatDocs({}, null, configSchema.getSchema());

let config: any = {};
let configError = '';
let configLoaded = false;
// format docs
for (const format of ['json', 'json5', 'yaml', 'yml', 'toml']) {
  // eslint-disable-line no-restricted-syntax
  const filepath = path.normalize(`${__dirname}/../../config/config.${format}`);

  if (fs.existsSync(filepath)) {
    try {
      logger.debug(`Loading config from ${filepath}`);
      configSchema.loadFile(filepath);
      configLoaded = true;
      break;
    } catch (err) {
      logger.debug(`Loading config from ${filepath} failed: ${err.message}`);
    }
  }
}

if (!configLoaded) {
  logger.warn(
    `No config file found in ${path.normalize(`${__dirname}/../../config/`)}, using defaults.`
  );
  configSchema.load({});
}

// Perform validation
try {
  configSchema.validate({ allowed: 'strict' });
  config = configSchema.getProperties();
} catch (error: any) {
  configError = error.message;
}

// load additional config module (no validation is performed)
const configModuleFilepath = path.normalize(`${__dirname}/../../config/config.js`);

if (fs.existsSync(configModuleFilepath)) {
  try {
    logger.info(`Loading config module from ${configModuleFilepath}`);
    const configModule = require('../../config/config.js'); // eslint-disable-line @typescript-eslint/no-var-requires

    Object.assign(config, configModule);
  } catch (err) {
    logger.error(`Error loading ${configModuleFilepath} module: ${err.message}`);
  }
}

// eslint-disable-next-line
logger.debug('Using config:', config);

//
export { configSchema, config, configDocs };
