const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "127.0.0.1",
        database: "burger_db",
        user: "root",
        port: 3306,
        password: "VENUShu1988$"
    });
}


module.exports = connection;