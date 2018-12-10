const express = require('express');
const swaggerTools = require('swagger-tools');
const cors = require('cors');
const swaggerDoc = require('./api/swagger/swagger.json');
const errorHandler = require('./api/util/errorHandler');
const httpStatus = require('./api/util/enum/httpStatus');

const options = {
  controllers: './api/controllers',
};

const app = express();

const customErrorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  const error = {
    key: 'PARAMETER_VALIDATION_FAIL',
    message: err.message,
    details: err,
    status: httpStatus.BAD_REQUEST,
  };
  errorHandler(error, res);
};


swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerMetadata());
  app.use(cors());
  app.use(middleware.swaggerValidator());
  app.use(customErrorHandler);
  app.use(middleware.swaggerRouter(options));
  app.use(middleware.swaggerUi({
    swaggerUi: '/docs/',
  }));

  const port = process.env.PORT || 8080;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`ok, I´m up at http://localhost:${port}`);
  });
});


module.exports = app;
