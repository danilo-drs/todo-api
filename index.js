const express = require('express');
const swaggerTools = require('swagger-tools');
const cors = require('cors');
const swaggerDoc = require('./api/swagger/swagger.json');

const options = {
  controllers: './api/controllers',
};

const app = express();


swaggerTools.initializeMiddleware(swaggerDoc, (middleware) => {
  app.use(middleware.swaggerMetadata());
  app.use(cors());
  app.use(middleware.swaggerValidator());
  app.use(middleware.swaggerRouter(options));
  app.use(middleware.swaggerUi({
    swaggerUi: '/docs/',
  }));

  const port = process.env.port || 8082;
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`ok, I´m up at http://localhost:${port}`);
  });
});


module.exports = app;
