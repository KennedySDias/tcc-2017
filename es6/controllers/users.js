import HttpStatus from 'http-status';

const defaultResponse = (data, statusCode = HttpStatus.OK ) => ({
    data,
    statusCode
})
const errorResponse = (message, statusCode = HttpStatus.BAD_REQUEST ) => ({
    error: message
}, statusCode)

class UsersController {

    constructor(Users) {
        this.Users = Users;
    }

    save(data){
        return this.Users.create(data)
            .then(result => defaultResponse(result, HttpStatus.CREATED))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }

    update(params, data) {
        return this.Users.update(params, data)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY))
    }

    getAll() {
        return this.Users.find({})
            .then(result = defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    getbyEmail(params) {
        return this.Users.findOne(params)
            .then(result => defaultResponse(result))
            .catch(error => errorResponse(error.message))
    }

    // delete()
}
export default UsersController