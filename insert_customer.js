//connect to database ( MySLQ DataBase )
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connection!");

    //insert database
    var sql = "INSERT INTO customers(name, address) VALUES ('Jason','HighWay 39'),('Jekkie','New York'),('Aekk','LA'),('Jame','Miami'),('Goes','Home town')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Customer Created");
    })
});
