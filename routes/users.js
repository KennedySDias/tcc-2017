const UsersController = require('../controllers/users')

module.exports = app => {

    const usersController = new UsersController(app.dataSource.models.Users)

    app.route('/users')
        .post((req, res) => {
            usersController.save(req.body)
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })

    app.route('/users/:email')
        .get((req, res) => {
            usersController.getbyEmail({
                local: {
                    email: req.params.email
                }
            })
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });

        })
        .put((req, res) => {
            usersController.update(req.params, req.body)
                .then((response) => {
                    res.status(response.statusCode);
                    res.json(response.data);
                });
        })
        .delete((req, res) => {
            // usersController.disable(req.params)
            //     .then(response => res.sendStatus(response.statusCode));
        });
}