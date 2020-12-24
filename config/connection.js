const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "192.168.1.156",
        user: "username",
        password: "password"
    });

    connection.connect((error)=>{
        if(error){
            console.log("Error connecting to DB " + error);
            return;
        }
    });
}


module.exports = connection;