describe('Routes Users', () => {

    const Users = app.dataSource.models.Users
    const defaultUser = {
        name: 'Name Default',
        email: 'email@default.com.br'
    }

    before(() => Users
        .remove({})
        .then(() => Users.create(defaultUser)))

    describe('Routes /users/', () =>
        it('POST - Create a new user', done => {
            const defaultUser2 = {
                name: 'Name Default',
                email: 'email@default.com.br'
            }

            request
                .post('/users')
                .send(defaultUser2)
                .end((err, res) => {
                    if (err) done(err)
                    else done()
                })
        })
    )

    describe('Routes /users/:email', () => {
        it('GET - Find a user by email', done => {
            const email = 'email@default.com.br'
            request
                .get(`/users/:${email}`)
                .end((err, res) => {
                    if (err) done(err)
                    else done()
                })
        })

        it('PUT - Update a user by email', done => {
            const email = 'email@default.com.br'
            const defaultUser = {
                name: 'Name Default',
                email: 'email@default.com.br'
            }
            request
                .get(`/users/:${email}`)
                .send(defaultUser)
                .end((err, res) => {
                    if (err) done(err)
                    else done()
                })
        })
    })


    /*


    describe('Route GET /users', () => {
        it('Retorna uma lista de Users', (done) => {
            request
                .get('/users')
                .end((err, res) => {
                    expect(res.body[0].name)
                        .to.be.eql(defaultUser.name);
                    expect(res.body[0].email)
                        .to.be.eql(defaultUser.email);
                    expect(res.body[0].password)
                        .to.be.eql(defaultUser.password);
                    // expect(res.body[0].birthday)
                    // .to.be.eql(defaultUser.birthday);
                    expect(res.body[0].address[0].id)
                        .to.be.eql(defaultUser.address[0].id);
                    expect(res.body[0].address[0].street)
                        .to.be.eql(defaultUser.address[0].street);
                    expect(res.body[0].address[0].number)
                        .to.be.eql(defaultUser.address[0].number);
                    expect(res.body[0].address[0].district)
                        .to.be.eql(defaultUser.address[0].district);
                    expect(res.body[0].address[0].zipcode)
                        .to.be.eql(defaultUser.address[0].zipcode);
                    expect(res.body[0].address[0].city)
                        .to.be.eql(defaultUser.address[0].city);
                    expect(res.body[0].address[0].state)
                        .to.be.eql(defaultUser.address[0].state);
                    expect(res.body[0].address[0].city)
                        .to.be.eql(defaultUser.address[0].city);
                    expect(res.body[0].devices[0].type)
                        .to.be.eql(defaultUser.devices[0].type);
                    expect(res.body[0].devices[0].token)
                        .to.be.eql(defaultUser.devices[0].token);
                    // expect(res.body[0].devices[0].lastAcess)
                    // .to.be.eql(defaultUser.devices[0].lastAcess);
                    // expect(res.body[0].favoriros[0])
                    // .to.be.eql(defaultUser.favoriros[0]);
                    expect(res.body[0].active)
                        .to.be.eql(defaultUser.active);

                    done(err);
                });
        });
    });

    describe('Route GET /users/{email}', () => {
        it('Retorna um User', (done) => {
            request
                .get('/users/email@default.com.br')
                .end((err, res) => {
                    expect(res.body.name)
                        .to.be.eql(defaultUser.name);
                    expect(res.body.email)
                        .to.be.eql(defaultUser.email);
                    expect(res.body.password)
                        .to.be.eql(defaultUser.password);
                    // expect(res.body.birthday)
                    // .to.be.eql(defaultUser.birthday);
                    expect(res.body.address[0].id)
                        .to.be.eql(defaultUser.address[0].id);
                    expect(res.body.address[0].street)
                        .to.be.eql(defaultUser.address[0].street);
                    expect(res.body.address[0].number)
                        .to.be.eql(defaultUser.address[0].number);
                    expect(res.body.address[0].district)
                        .to.be.eql(defaultUser.address[0].district);
                    expect(res.body.address[0].zipcode)
                        .to.be.eql(defaultUser.address[0].zipcode);
                    expect(res.body.address[0].city)
                        .to.be.eql(defaultUser.address[0].city);
                    expect(res.body.address[0].state)
                        .to.be.eql(defaultUser.address[0].state);
                    expect(res.body.address[0].city)
                        .to.be.eql(defaultUser.address[0].city);
                    expect(res.body.devices[0].type)
                        .to.be.eql(defaultUser.devices[0].type);
                    expect(res.body.devices[0].token)
                        .to.be.eql(defaultUser.devices[0].token);
                    // expect(res.body.devices[0].lastAcess)
                    // .to.be.eql(defaultUser.devices[0].lastAcess);
                    // expect(res.body.favoriros[0])
                    // .to.be.eql(defaultUser.favoriros[0]);
                    expect(res.body.active)
                        .to.be.eql(defaultUser.active);

                    done(err);
                });
        });
    });


    describe('Route PUT /users/{email}', () => {
        it('Atualiza um User', (done) => {
            const updateUser = {
                name: 'Nome update',
            };

            request
                .put('/users/email@default.com.br')
                .send(updateUser)
                .end((err, res) => {
                    expect(res.body).to.be.eql({ ok: 1, nModified: 1, n: 1 });

                    done(err);
                });
        });
    });

    describe('Route DELETE /users/{email}', () => {
        it('Remove um User (Faz o atributo ATIVO = false)', (done) => {
            request
                .delete('/users/email@default.com.br')
                .end((err, res) => {
                    expect(res.statusCode).to.be.eql(204);

                    done(err);
                });
        });
    });

    */
});
