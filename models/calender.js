/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var user = {
    findMany: function(condition, cb) {
        orm.findMany('calender', 'description', condition, function(res) {
            cb(res);
        });
    },
    all: function(cb) {
        orm.all('calender', function(res) {
            cb(res);
        });
    },
    //cols and vals are arrays
    create: function(cols, vals, cb) {
        orm.create('calender', cols, vals, function(res) {
            cb(res);
        });
    },
    update: function(objColVals, condition, cb) {
        orm.update('calender', objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('calender', condition, function(res) {
            cb(res);
        });
    }
};

module.exports = user;
