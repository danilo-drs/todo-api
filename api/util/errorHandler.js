const httpStatus = require('./enum/httpStatus');

const mountError = err => ({
  key: err.key || 'UNESPECTED_ERROR',
  date: new Date().toISOString(),
  message: err.message || '',
  details: err.details || err,
});

module.exports = (error, response) => {
  let json;
  if (Array.isArray(error)) {
    json = error.map(err => mountError(err));
  } else {
    json = mountError(error);
  }
  response.status(error.status || httpStatus.SERVER_ERROR).json(json);
};
