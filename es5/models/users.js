'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (mongoose) {
    return mongoose.model('users', new mongoose.Schema({
        name: {
            type: String
        },
        email: {
            type: String
        }
    }));
};