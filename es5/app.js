'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _dataSource = require('./config/dataSource');

var _dataSource2 = _interopRequireDefault(_dataSource);

var _users = require('./routes/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.dataSource = (0, _dataSource2.default)(app);

app.set('port', 3000);
app.use(_bodyParser2.default.json());

//Rotas
(0, _users2.default)(app);

exports.default = app;