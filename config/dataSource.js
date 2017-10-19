const mongoose = require('mongoose')
const Users = require('../models/users')

let dataBase = null

module.exports = app => {

    if (!dataBase){

        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/tcc', { useMongoClient: true })

        dataBase = {
            mongoose,
            models: {}
        }

        dataBase.models = {
            Users: Users(mongoose)
        }

        return dataBase
    }

    return dataBase
}