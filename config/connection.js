// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

var mysql = require('mysql');

// we placed the connections in this source object
var source = {
    // localhost
    localhost: {
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: "1123581321w",
        database: "stwdb"
    },

    // jawsDB
    jawsDB: {
        port: 3306,
        host: 'uoa25ublaow4obx5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'x3frb4bh33iiqzfi',
        password: "u92w0nxvi59ql1yn",
        database: "odym4qgj1zo4nx6m"
    }
}

// we use source.[name of connection] to hook into mysql
var connection = mysql.createConnection(source.jawsDB);


connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
