import mongoose from 'mongoose'
import Users from '../models/users'

let dataBase = null

export default app => {

    if (!dataBase){

        const config = app.config
        mongoose.Promise = global.Promise
        mongoose.connect(config.uri,
            config.options)

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