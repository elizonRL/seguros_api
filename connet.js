const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
});
connection.connect((err) => {
    if (err) {
      console.error("No se pudo conectar a MySQL: ", err);
      return;
    }
  
    console.log("Se conectó a MySQL correctamente");
    connection.query("Call obtener_poliza_por_numero(?)",["PZ-10002"], (err, rows) => {
      if (err) {
        console.error("No se pudo realizar la consulta a MySQL: ", err);
        return;
      }
  
      console.log("Resultado de la consulta: ", rows);
    });
  });

exports.connection = connection;