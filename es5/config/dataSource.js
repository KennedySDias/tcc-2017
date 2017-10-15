'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _users = require('../models/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataBase = null;

exports.default = function (app) {

    if (!dataBase) {

        _mongoose2.default.Promise = global.Promise;
        _mongoose2.default.connect('mongodb://localhost/tcc', { useMongoClient: true });

        dataBase = {
            mongoose: _mongoose2.default,
            models: {}
        };

        dataBase.models = {
            Users: (0, _users2.default)(_mongoose2.default)
        };

        return dataBase;
    }

    return dataBase;
};