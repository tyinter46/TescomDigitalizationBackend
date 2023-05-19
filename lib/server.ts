import http from 'http';
import logger from './config/logger';
import app, {PORT} from './config/app';

http.createServer(app).listen(PORT, ()=>{
    logger.info(`Express server listening on port ${PORT} `)
})
