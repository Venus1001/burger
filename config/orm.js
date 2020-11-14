
// Import MYSQL connection:
const connection = require("../config/connection.js");

function objectToSql(obj){
    const array =[];
    for(var key in obj){
        var value = obj[key];
        if(Object.hasOwnProperty.call(obj,key)){
            if(typeof value === "string" && value.indexOf(" ") >= 0){
                value = "'" + value + "'";
            }
            array.push(key + "=" + value);
        }
    }
    return array.toString();
}

const orm = {
    selectAll: function (table,cb){
        var query = "SELECT * FROM " + table + ";"
        connection.query(query, function(error,response){
            if(error) throw error;
            cb(response);
        });
    },

    insertOne: function(table, column, value,cb){
        var query = "INSERT INTO " + table + '(' + col + ') VALUES ("' + val + '");'
        connection.query(query,function(error,response){
            if(error) throw error;
            cb(response);
        });
    },

    updateOne: function(table,columnVal, condition, cb){
        var query = "UPDATE " + table + " SET " + objectToSql(columnVal) + " WHERE " + condition + ";"
        connection.query(query,function(error,response){
            if(error) throw error;
            cb(response);
        });
    }
}

//Export the orm object for the model
module.exports = orm;