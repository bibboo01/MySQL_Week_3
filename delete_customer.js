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
    var sql = "DELETE FROM customers WHERE name = 'Jason'";
    con.query(sql,function(err,results){
        if(err) throw err;
        console.log("Delete successfully");
    })
});