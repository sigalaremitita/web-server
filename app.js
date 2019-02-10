var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydbr"
});

con.connect(function(err) {
    if (err) throw err;
var sql = sql = "INSERT INTO customers (name, address, sexe) VALUES ('Company Ltd', 'Highway 50','m')";
  con.query(sql)
});