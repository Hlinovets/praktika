const mysql = require("mysql2");
 const pool = mysql.createPool({
    connectionLimit:5,
  host: "localhost",
  user: "root",
database: "usersdb2",
  password: "usbw",
port: "3307"
}).promise();
pool.execute("SELECT * FROM users")
          .then(result =>{
            console.log(result[0]);
          })
          .catch(function(err) {
            console.log(err.message);
          });
    
