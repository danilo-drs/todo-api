const itemBO = require('../BO/ItemBO');
const httpStatus = require('../util/enum/httpStatus');
const errorHandler = require('../util/errorHandler');

const get = async (req, res) => {
  const {
    user: { value: user },
    code: { value: listCode },
  } = req.swagger.params;
  try {
    const data = await itemBO.get({ listCode, user });
    return res.status(httpStatus.OK).json(data);
  } catch (error) {
    return errorHandler(error, res);
  }
};

const execSetData = async ({
  data, user, operation, res,
}) => {
  if (!data.description) {
    return errorHandler({
      key: 'INVALID_PARAMETER',
      message: 'Parameter "data.description" is invalid',
      status: httpStatus.BAD_REQUEST,
    }, res);
  }
  try {
    const item = await itemBO[operation]({ ...data, user });
    if (operation === 'create') {
      return res.status(httpStatus.CREATED).json(item);
    }
    return res.send(httpStatus.NO_CONTENT);
  } catch (error) {
    return errorHandler(error, res);
  }
};

const post = async (req, res) => {
  const {
    data: { value: data },
    user: { value: user },
    code: { value: listCode },
  } = req.swagger.params;
  execSetData({
    data: { ...data, listCode }, user, operation: 'create', res,
  });
};

const patch = async (req, res) => {
  const {
    data: { value: data },
    user: { value: user },
    itemCode: { value: code },
  } = req.swagger.params;
  execSetData({
    data: { ...data, code }, user, operation: 'update', res,
  });
};

const destroy = async (req, res) => {
  const {
    user: { value: user },
    itemCode: { value: code },
  } = req.swagger.params;
  try {
    await itemBO.destroy(code, user);
    return res.send(httpStatus.NO_CONTENT);
  } catch (error) {
    return errorHandler(error, res);
  }
};

module.exports = {
  get,
  post,
  patch,
  destroy,
};
