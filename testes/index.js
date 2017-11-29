const fs = require('fs')
const requestify = require('requestify')
const app = require('../api/app')

const times = 1000
const url = 'http://localhost:3000'
const users = app.dataSource.models.Users

let tests = 100;

// Limpa a base de dados antes do início dos testes
function test() {
    console.log(`----- Testes restantes: ${tests}`)
    tests--;
    users
        .remove({})
        .then(() => {

            console.time("Tempo de execução dos testes: ")
            const startTest = new Date()

            let promisses = []
            let defaultUser = {
                name: 'Kennedy de Souza Dias',
                email: 'kennedysouzadias@gmail.com'
            }

            console.log(`POST - Cria ${times} usuários`)
            promisses = []
            for (i = 0; i < times; i++) {

                let user = {
                        name: `${defaultUser.name} ${i}`,
                        email: `${i}${defaultUser.email}`
                    },
                    email = `${i}${defaultUser.email}`

                promisses.push(new Promise((resolve, reject) => {

                    requestify.post(`${url}/users`, user)
                        .then(() => {
                            resolve()
                        })
                }))
            }
            Promise.all(promisses)
                .then(() => {

                    console.log(`\tGET - Pesquisa ${times} usuários pelo e-mail`)
                    promisses = []
                    for (i = 0; i < times; i++) {

                        let email = `${i}${defaultUser.email}`

                        promisses.push(new Promise((resolve, reject) => {
                            requestify.get(`${url}/users/${email}`)
                                .then(() => {
                                    resolve()
                                })
                        }))
                    }
                    Promise.all(promisses)
                        .then(() => {

                            console.log(`\t\tPUT - Atualiza ${times} usuários pelo e-mail`)
                            promisses = []
                            for (i = 0; i < times; i++) {

                                let email = `${i}${defaultUser.email}`,
                                    userUpdated = {
                                        name: 'Kennedy de Souza Dias Atualizado'
                                    }

                                promisses.push(new Promise((resolve, reject) => {
                                    requestify.put(`${url}/users/${email}`, userUpdated)
                                        .then(() => {
                                            resolve()
                                        })
                                }))
                            }
                            Promise.all(promisses)
                                .then(() => {

                                    console.log(`\t\t\tDELETE - Deleta ${times} usuários pelo e-mail`)
                                    promisses = []
                                    for (i = 0; i < times; i++) {

                                        let email = `${i}${defaultUser.email}`

                                        promisses.push(new Promise((resolve, reject) => {
                                            requestify.delete(`${url}/users/${email}`)
                                                .then(() => {
                                                    resolve()
                                                })
                                        }))
                                    }
                                    Promise.all(promisses)
                                        .then(() => {

                                            console.timeEnd("Tempo de execução dos testes: ")

                                            const endTest = new Date()

                                            requestify.post(`${url}/time`, {time: (endTest - startTest)})
                                                .then(() => {
                                                    // Verifica se já executou os testes necessarios, se nao, executa novamente
                                                    if (!tests) process.exit()
                                                    else test()
                                                })
                                        })
                                })
                        })
                })
        })

}

test()
