var express = require("express");
var router = express.Router();
var mysql = require('mysql');


router.post("", function(req, res, next) {
    var connection = mysql.createConnection({
        host     : 'remotemysql.com',
        user     : '1y1N70JWV8',
        password : "2aSty3PHON",
        database: '1y1N70JWV8'
    });
    connection.query("INSERT INTO `orders` (`id`, `username`, `first_name`, `surname`, `address`, `order_desc`, `price`, `date`) VALUES (NULL, '"+ req.body.username +"', '"+ req.body.first_name +"', '"+ req.body.surname +"', '"+ req.body.address +"', '"+ req.body.order_desc +"', '"+ req.body.price +"', '"+ req.body.date +"');", function(err, rows, fields) {
        if(err){
            console.log("An error occurred performing the query.");
            console.log(err);
            return;
        }

        // res.send(rows);

    });
    connection.end();
});

module.exports = router;