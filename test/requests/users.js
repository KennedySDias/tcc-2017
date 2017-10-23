const requestfy = require('requestify')
const os = require('os-utils')

describe('Routes Users', () => {

    console.time("Tempo de execução dos testes: ")

    const TIMES = 100
    const URL = 'http://localhost:3000'
    const USERS = app.dataSource.models.Users

    let defaultUser = {
        name: 'Name Default',
        email: 'email@default.com.br'
    }

    before(() => USERS
        .remove({}))

    // POST
    for (i = 0 ; i < TIMES ; i++) {
console.log("POST:",i)
        let user = {
            name: `${defaultUser.name} ${i}`,
            email: `${i}${defaultUser.email}`
        }

        // describe('Routes /users/', () =>
            it('POST - Create a new user', done => {
                requestfy.post(`${URL}/users`, user)
                    .then( res => {
                        done()
                    })
            })
        // )
    }

    // GET
    for (i = 0 ; i < TIMES ; i++) {
        console.log("GET:",i)

        let email = `${i}${defaultUser.email}`

        // describe('Routes /users/:email', () => {
            it('GET - Find a user by email', done => {
                requestfy.get(`${URL}/users/${email}`)
                    .then( res => {
                        done()
                    });
            })
        // })

    }

    // PUT
    for (i = 0 ; i < TIMES ; i++) {
        console.log("PUT:",i)

        let email = `${i}${defaultUser.email}`

        // describe('Routes /users/:email', () => {
            it('PUT - Update a user by email', done => {
                let userUpdated = {
                    name: 'Name updated'
                }

                requestfy.put(`${URL}/users/${email}`, userUpdated)
                    .then( res => {
                        done()
                    })
            })
        // })

    }

    // DELETE
    for (i = 0 ; i < TIMES ; i++) {
        console.log("DELETE:",i)

        let email = `${i}${defaultUser.email}`

        // describe('Routes /users/:email', () => {
            it('DELETE - Remove a user by email', done => {
                requestfy.delete(`${URL}/users/${email}`)
                    .then( res => {
                        done()
                    })
            })
        // })

    }

    console.timeEnd("Tempo de execução dos testes: ")
});
