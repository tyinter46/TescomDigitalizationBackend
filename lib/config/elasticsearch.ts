// import { Client } from '@elastic/elasticsearch';

// // Use environment variable for Elasticsearch URL, fallback to localhost for local dev
// // const esNode = process.env.ELASTICSEARCH_URL || 'http://elasticsearch-srv:9200';
// const esNode = process.env.ELASTICSEARCH_URL || 'http://localhost:9200';


// // http://localhost:9200
// if (!process.env.ELASTICSEARCH_URL) {
//   throw new Error('ELASTICSEARCH_URL is not defined');
// }
//  console.log(process.env.ELASTICSEARCH_URL)
// export const esClient = new Client({
//   node: esNode,
//   auth: {
//     username: process.env.ELASTICSEARCH_USERNAME || 'elastic',
//     password: process.env.ELASTICSEARCH_PASSWORD || 'yMyg9NqOyr4G5XK5bNNx',
//   },
//   requestTimeout: 30000, // 30 seconds
//   maxRetries: 3,
// });



import 'dotenv/config';
import { Client } from '@elastic/elasticsearch';

const esNode = process.env.ELASTICSEARCH_URL ?? 'http://localhost:9200';

console.log('Elasticsearch node:', esNode);

export const esClient = new Client({
  node: esNode,
  auth: {
    username: process.env.ELASTICSEARCH_USERNAME ?? 'elastic',
    password: process.env.ELASTICSEARCH_PASSWORD ?? 'yMyg9NqOyr4G5XK5bNNx',
  },
  requestTimeout: 30000,
  maxRetries: 3,
});
