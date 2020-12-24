const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "192.168.1.156",
        database: "burger_db",
        user: "username",
        port: 3306,
        password: "password"
    });
}


module.exports = connection;