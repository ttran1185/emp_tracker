const mysql = require("mysql");
const connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Jayelle2019!",
    database: "emp_tracker",
});

connect.connect(function(err) {
    if (err) throw err;
})

module.exports = connect;