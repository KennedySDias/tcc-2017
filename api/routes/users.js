const fs = require('fs')
const UsersController = require('../controllers/users')
const parts = 100
const total = 1000

let arrayParts = []
let path = ""

// Preenche o array para marcacao dos diretórios
for (let i = 1; i <= parts; i++) arrayParts.push(i * total);

let countPost = 0

function registerPost(memory) {

    // Verifica a qual grupo pertence
    arrayParts.every( element => {
        if (countPost < element) {
            path = String(element)
            return false;
        }

        return true;
    })

    // Com base no grupo verifica se ja existe diretorio, se nao, entao o cria
    path = `./api/registers/tests_${path}`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }

    // Regista dentro do arquivo em seu respectivo grupo
    fs.appendFileSync(`${path}/registrosMemoriaPost.txt`, `${memory}\n`)

    countPost++
}

let countGet = 0

function registerGet(memory) {

    // Verifica a qual grupo pertence
    arrayParts.every( element => {
        if (countGet < element) {
            path = String(element)
            return false;
        }

        return true;
    })

    // Com base no grupo verifica se ja existe diretorio, se nao, entao o cria
    path = `./api/registers/tests_${path}`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }

    // Regista dentro do arquivo em seu respectivo grupo
    fs.appendFileSync(`${path}/registrosMemoriaGet.txt`, `${memory}\n`)

    countGet++
}

let countPut = 0

function registerPut(memory) {

    // Verifica a qual grupo pertence
    arrayParts.every( element => {
        if (countPut < element) {
            path = String(element)
            return false;
        }

        return true;
    })

    // Com base no grupo verifica se ja existe diretorio, se nao, entao o cria
    path = `./api/registers/tests_${path}`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }

    // Regista dentro do arquivo em seu respectivo grupo
    fs.appendFileSync(`${path}/registrosMemoriaPut.txt`, `${memory}\n`)

    countPut++
}

let countDelete = 0

function registerDelete(memory) {

    // Verifica a qual grupo pertence
    arrayParts.every( element => {
        if (countDelete < element) {
            path = String(element)
            return false;
        }

        return true;
    })

    // Com base no grupo verifica se ja existe diretorio, se nao, entao o cria
    path = `./api/registers/tests_${path}`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }

    // Regista dentro do arquivo em seu respectivo grupo
    fs.appendFileSync(`${path}/registrosMemoriaDelete.txt`, `${memory}\n`)

    countDelete++
}

let countTime = 0

function registerTime(time, callback) {

    // Verifica a qual grupo pertence
    arrayParts.every( element => {
        if (countTime < element) {
            path = String(element)
            return false;
        }

        return true;
    })

    // Com base no grupo verifica se ja existe diretorio, se nao, entao o cria
    path = `./api/registers/tests_${path}`;
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path)
    }

    // Regista dentro do arquivo em seu respectivo grupo
    fs.appendFileSync(`${path}/tempoTestes.txt`, `${time}\n`)

    countTime += 1000

    callback();
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

    app.route('/time')
        .post((req, res) => registerTime(req.body.time, () => res.json({ status: "OK"})) )
}