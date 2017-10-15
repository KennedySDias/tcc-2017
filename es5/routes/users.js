'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {

    var usersController = new _users2.default(app.dataSource.models.Users);

    app.route('/users').post(function (req, res) {
        usersController.save(req.body).then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    });

    app.route('/users:email').get(function (req, res) {
        usersController.getbyEmail({
            local: {
                email: req.params.email
            }
        }).then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    }).put(function (req, res) {
        usersController.update(req.params, req.body).then(function (response) {
            res.status(response.statusCode);
            res.json(response.data);
        });
    }).delete(function (req, res) {
        // usersController.disable(req.params)
        //     .then(response => res.sendStatus(response.statusCode));
    });
};