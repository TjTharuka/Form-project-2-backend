/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/order, import/first */
require('dotenv').config({ path: '.env' });
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import config from './config/config';
import router from './routes/index';

//import http
const http = require('http');

// eslint-disable-next-line import/order
import express = require('express');

console.log('db:');
console.log(`mongodb:${config.database}`);

// Connect to database
mongoose
  .connect(`mongodb:${config.database}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to mongodb.'); // eslint-disable-line no-console
  })
  .catch((error) => {
    console.log(error); // eslint-disable-line no-console
  });
mongoose.set('debug', true);
mongoose.set('useCreateIndex', true);

const app: express.Application = express();




app.use(cors());
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use(config.apiVersion, router);

// start server...
http.createServer(app).listen(config.web_port, (err) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('HTTP server listening on port : ' + config.web_port);
  }
});
