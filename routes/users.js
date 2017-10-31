const os = require('os')
const fs = require('fs')
const UsersController = require('../controllers/users')

let countPost = 0;
function registerPost(memory) {
    countPost++
    fs.appendFileSync('registrosMemoriaPost.txt', `${countPost} - ${memory}\n`)
}

let countGet = 0;
function registerGet(memory) {
    countGet++
    fs.appendFileSync('registrosMemoriaGet.txt', `${countGet} - ${memory}\n`)
}

let countPut = 0;
function registerPut(memory) {
    countPut++
    fs.appendFileSync('registrosMemoriaPut.txt', `${countPut} - ${memory}\n`)
}

let countDelete = 0;
function registerDelete(memory) {
    countDelete++
    fs.appendFileSync('registrosMemoriaDelete.txt', `${countDelete} - ${memory}\n`)
}

module.exports = app => {
    const usersController = new UsersController(app.dataSource.models.Users)

    app.route('/users')
        .post((req, res) => {

            // console.log('/users - POST');
            registerPost(os.totalmem() - os.freemem());

            usersController.save(req.body)
                .then((response) => {
                    res.status(response.statusCode)
                    res.json(response.data)
                })
        })

    app.route('/users/:email')
        .get((req, res) => {

            // console.log(`/users/${req.params.email} - GET: `);
            registerGet(os.totalmem() - os.freemem());

            usersController.getbyEmail({
                email: req.params.email
            })
                .then((response) => {
                    res.status(response.statusCode)
                    res.json(response.data)
                })

        })
        .put((req, res) => {

            // console.log(`/users/${req.params.email} - PUT: `);
            registerPut(os.totalmem() - os.freemem());

            usersController.update(req.params, req.body)
                .then((response) => {
                    res.status(response.statusCode)
                    res.json(response.data)
                })
        })
        .delete((req, res) => {

            // console.log(`/users/${req.params.email} - DELETE: `);
            registerDelete(os.totalmem() - os.freemem());

            usersController.delete({
                email: req.params.email
            })
                .then((response) => {
                    res.status(response.statusCode)
                    res.json(response.data)
                })
        })
}