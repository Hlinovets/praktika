const mysql = require("mysql2");
 const pool = mysql.createPool({
    connectionLimit:5,
  host: "localhost",
  user: "root",
database: "usersdb2",
  password: "usbw",
port: "3307"
});
