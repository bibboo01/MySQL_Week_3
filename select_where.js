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
    var sql = "SELECT * FROM `customers` WHERE address = 'HighWay 39';";
    con.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
    })
});