
// Set up DB connection:
const mysql = require("mysql");

const connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        passowrd:"",
        database:"burger_DB"
    });
}
// connection:
connection.connect(function(error){

    if(error) return error;
});

// Export connection ORM:
module.exports = connection;