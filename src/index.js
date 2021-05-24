require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middleware = require('./middlewares/middleware');
const routes = require('./routes');
const KeyGenService = require('./services/keygen.service');

KeyGenService.createIfNotExists();

const app = express();
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(`/api`, routes);
app.use(middleware.errorHandler);
app.use(middleware.notFound);

const port = process.env.PORT || 8080;
app.listen(port, () => console.info(`Middleware running on port ${port}`));