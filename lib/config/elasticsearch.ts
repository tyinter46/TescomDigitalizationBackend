import { Client } from '@elastic/elasticsearch';

// Use environment variable for Elasticsearch URL, fallback to localhost for local dev
const esNode = process.env.ELASTICSEARCH_URL || 'http://elasticsearch-srv:9200';

export const esClient = new Client({
  node: esNode,
  auth: {
    username: process.env.ELASTICSEARCH_USERNAME || 'elastic',
    password: process.env.ELASTICSEARCH_PASSWORD || 'yMyg9NqOyr4G5XK5bNNx',
  },
  requestTimeout: 30000, // 30 seconds
  maxRetries: 3,
});
