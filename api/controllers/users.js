const HttpStatus = require('http-status')
const defaultResponse = (data, statusCode = HttpStatus.OK ) => ({
    data,
    statusCode
})
const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST ) => ({
    error: message
}, statusCode)

class UsersController {

    constructor(Users) {
        this.Users = Users
    }

    save(data){
        return this.Users.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.NO_CONTENT))
    }
    getbyEmail(params) {
        return this.Users.findOne(params)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.NO_CONTENT))
    }
    update(params, data) {
        return this.Users.update(params, data)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.NO_CONTENT))
    }
    delete(params) {
        return this.Users.remove(params)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.NO_CONTENT))
    }
}
module.exports = UsersController