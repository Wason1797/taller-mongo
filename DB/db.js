var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'taller'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;