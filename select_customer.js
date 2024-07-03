//connect to database ( MySLQ DataBase )
var mysql = require("mysql");
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb"
});
var sql = "SELECT * FROM customers";

con.connect(function (err) {
    if (err) throw err;
    console.log("Connection!");
    con.query(sql, function (err, results, fields) {
        if(err) throw err;
        console.log(results);
        results.forEach((row) => {
            console.log("ID : " + row["id"] + "NAME : " + row["name"] + "ADDRESS : " + row["address"]);
        });
    })
});