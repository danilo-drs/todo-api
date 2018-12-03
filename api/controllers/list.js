const listBO = require('../BO/ListBO');
const uuid = require('uuid/v1');
const httpStatus = require('../util/enum/httpStatus');


const get = async (req, res) => {
    try {
        const data = await listBO.get();
        console.log(data);
        res.status(httpStatus.OK).json(data);
    } catch (erro) {
        const data = await listBO.get();
        res.status(httpStatus.SERVER_ERROR).json(erro);
    }
}
const post = async (req, response) => {
    const data = (req.swagger.params.data || {}).value;
    const user = (req.swagger.params.user || {}).value;
    try {
        await listBO.create({ ...data, code: uuid(), user });
        response.send(httpStatus.CREATED);
    } catch (erro) {
        response.status(httpStatus.SERVER_ERROR).json(erro);
    }
}

module.exports = {
    get,
    post,
}