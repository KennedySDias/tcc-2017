import mongoose from 'mongoose'
import Users from '../models/users'

let dataBase = null

export default app => {

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