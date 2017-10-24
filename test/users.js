const requestfy = require('requestify')
const app = require('../app')

const times = 100
const url = 'http://localhost:3000'
const users = app.dataSource.models.Users

// Limpa a base de dados antes do início dos testes
users
    .remove({})
    .then( () => {

        console.time("Tempo de execução dos testes: ")

        let defaultUser = {
            name: 'Kennedy de Souza Dias',
            email: 'kennedysouzadias@gmail.com'
        }

        console.log(`POST - Cria ${times} usuários`)
        for (i = 0 ; i < times ; i++) {

            let user = {
                name: `${defaultUser.name} ${i}`,
                email: `${i}${defaultUser.email}`
            }

            requestfy.post(`${url}/users`, user)
        }

        console.log(`GET - Pesquisa ${times} usuários pelo e-mail`)
        for (i = 0 ; i < times ; i++) {

            let email = `${i}${defaultUser.email}`

            requestfy.get(`${url}/users/${email}`)
        }

        console.log(`PUT - Atualiza ${times} usuários pelo e-mail`)
        for (i = 0 ; i < times ; i++) {

            let email = `${i}${defaultUser.email}`
            let userUpdated = {
                name: 'Kennedy de Souza Dias Atualizado'
            }

            requestfy.put(`${url}/users/${email}`, userUpdated)
        }

        console.log(`DELETE - Deleta ${times} usuários pelo e-mail`)
        for (i = 0 ; i < times ; i++) {

            let email = `${i}${defaultUser.email}`

            requestfy.delete(`${url}/users/${email}`)
        }

        console.timeEnd("Tempo de execução dos testes: ")

        process.exit()
    })
