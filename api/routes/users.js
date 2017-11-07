const fs = require('fs')
const UsersController = require('../controllers/users')

// let countPost = 0;
function registerPost(memory) {
    // countPost++
    fs.appendFileSync('./api/registers/registrosMemoriaPost.txt', `${memory}\n`)
}

// let countGet = 0;
function registerGet(memory) {
    // countGet++
    fs.appendFileSync('./api/registers/registrosMemoriaGet.txt', `${memory}\n`)
}

// let countPut = 0;
function registerPut(memory) {
    // countPut++
    fs.appendFileSync('./api/registers/registrosMemoriaPut.txt', `${memory}\n`)
}

// let countDelete = 0;
function registerDelete(memory) {
    // countDelete++
    fs.appendFileSync('./api/registers/registrosMemoriaDelete.txt', `${memory}\n`)
}

module.exports = app => {
    const usersController = new UsersController(app.dataSource.models.Users)

    app.route('/users')
        .post((req, res) => {

            usersController.save(req.body)
                .then((response) => {

                    registerPost(process.memoryUsage().rss);

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

                    registerGet(process.memoryUsage().rss);

                    res.status(response.statusCode)
                    res.json(response.data)
                })

        })
        .put((req, res) => {

            usersController.update(req.params, req.body)
                .then((response) => {

                    registerPut(process.memoryUsage().rss);

                    res.status(response.statusCode)
                    res.json(response.data)
                })
        })
        .delete((req, res) => {

            usersController.delete({
                email: req.params.email
            })
                .then((response) => {

                    registerDelete(process.memoryUsage().rss);

                    res.status(response.statusCode)
                    res.json(response.data)
                })
        })
}