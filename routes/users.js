const os = require('os')
const fs = require('fs')
const UsersController = require('../controllers/users')

module.exports = app => {

    const usersController = new UsersController(app.dataSource.models.Users)

    app.route('/users')
        .post((req, res) => {

            fs.appendFile('memoria.tx', (os.totalmem() - os.freemem()) * 100 / os.totalmem() ,
                err => {
                    if (err) return console.log(err);
                    console.log('Appended!');
                });

            usersController.save(req.body)
                .then((response) => {
                    res.status(response.statusCode)
                    res.json(response.data)
                })
        })

    app.route('/users/:email')
        .get((req, res) => {
            usersController.getbyEmail({
                email: req.params.email
            })
                .then((response) => {
                    res.status(response.statusCode)
                    res.json(response.data)
                })

        })
        .put((req, res) => {
            usersController.update(req.params, req.body)
                .then((response) => {
                    res.status(response.statusCode)
                    res.json(response.data)
                })
        })
        .delete((req, res) => {
            usersController.delete({
                email: req.params.email
            })
                .then((response) => {
                    res.status(response.statusCode)
                    res.json(response.data)
                })
        })
}