const orm = require("../config/orm.js");

const burger = {
    all: function(cb){
        orm.selectAll("burgers", function(response){
            cb(response);
        });
    },

    create: function(value, cb){
        orm.insertOne("burgers", "burger_type", value,function(response){
            cb(response);
        });
    },
    update: function(columnValue, condition, cb){
        orm.updateOne("burgers", columnValue,condition,function(response){
            cb(response);
        });
    },
};

module.exports = burger;