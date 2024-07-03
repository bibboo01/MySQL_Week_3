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
    var sql = "UPDATE customers SET address='Canyon 436' WHERE name='Jason'";
    con.query(sql,function(err,results,fields){
        if(err) throw err;
        console.log(results.affectedRows + " record(s) Updated");
    })
});