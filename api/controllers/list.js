const listBO = require('../BO/ListBO');
const httpStatus = require('../util/enum/httpStatus');
const errorHandler = require('../util/errorHandler');

const execGET = async ({ code, user, res }) => {
  try {
    const data = await listBO.get({ code, user });
    res.status(httpStatus.OK).json(data);
  } catch (error) {
    errorHandler(error, res);
  }
};
const get = (req, res) => {
  const { value: user } = req.swagger.params.user;
  execGET({ user, res });
};

const getList = async (req, res) => {
  const { user: { value: user }, code: { value: code } } = req.swagger.params;
  execGET({ code, user, res });
};
const execSetData = async ({
  data, user, operation, res,
}) => {
  if (!data.name) {
    return errorHandler({
      key: 'INVALID_PARAMETER',
      message: 'Parameter "data.name" is invalid',
      status: httpStatus.BAD_REQUEST,
    }, res);
  }
  try {
    await listBO[operation]({ ...data, user });
    const status = (operation === 'create' ? 'CREATED' : 'NO_CONTENT');
    return res.send(httpStatus[status]);
  } catch (error) {
    return errorHandler(error, res);
  }
};
const post = async (req, res) => {
  const {
    user: { value: user },
    data: { value: data },
  } = req.swagger.params;
  execSetData({
    data, user, operation: 'create', res,
  });
};

const patch = async (req, res) => {
  const {
    user: { value: user },
    data: { value: data },
    code: { value: code },
  } = req.swagger.params;
  execSetData({
    data: { ...data, code }, user, operation: 'update', res,
  });
};

const destroy = async (req, res) => {
  const { code: { value: code } } = req.swagger.params;
  try {
    listBO.destroy(code);
    return res.send(httpStatus.NO_CONTENT);
  } catch (error) {
    return errorHandler(error, res);
  }
};
module.exports = {
  get,
  post,
  getList,
  patch,
  destroy,
};
