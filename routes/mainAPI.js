var express = require("express");
var router = express.Router();
var mysql = require('mysql');


router.get("/", function(req, res, next) {
    var connection = mysql.createConnection({
        host     : 'remotemysql.com',
        user     : '1y1N70JWV8',
        password : "2aSty3PHON",
        database: '1y1N70JWV8'
    });
    connection.query("SELECT * FROM pizzas", function(err, rows, fields) {
        if(err){
            console.log("An error occurred performing the query.");
            console.log(err);
            return;
        }

        res.send(rows);
    });
    connection.end();

});

module.exports = router;