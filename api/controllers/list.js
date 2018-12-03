const listBO = require('../BO/ListBO');
const httpStatus = require('../util/enum/httpStatus');
const errorHandler = require('../util/errorHandler');


const get = async (req, res) => {
  const { user } = req.swagger.params;
  try {
    const data = await listBO.get({ user });
    res.status(httpStatus.OK).json(data);
  } catch (erro) {
    res.status(httpStatus.SERVER_ERROR).json(errorHandler(erro));
  }
};
const post = async (req, response) => {
  const data = (req.swagger.params.data || {}).value;
  const user = (req.swagger.params.user || {}).value;
  try {
    await listBO.create({ ...data, user });
    response.send(httpStatus.CREATED);
  } catch (erro) {
    response.status(httpStatus.SERVER_ERROR).json(errorHandler(erro));
  }
};

module.exports = {
  get,
  post,
};
