var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});
//create database (not have database) 
//but have database let create database
con.connect(function (err) {
    if (err) throw err;
    console.log("Connection!");

    con.query("CREATE DATABASE IF NOT EXISTS mydb", function (err, result) {
        if (err) throw err;
        console.log("DataBase Created");
    })
});