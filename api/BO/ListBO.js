const ListRepository = require('../DAO/repositories/ListRepository');
module.exports = {
    get: (code) => new ListRepository().read(code),
    create: (data) => new ListRepository().create(data.name, data.user)
}