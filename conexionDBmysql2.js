const mysql = require("mysql2");

//Configuración en JSON de la conexión a una base de datos en MySQL o MariaDB
/*const configuracion = {
    host: 'localhost', //Direccion IP o nombre del servidor 
    port: 3306,
    user: 'root', // mysql -u root -p
    password: 'root',
    database: 'test1'
}*/

const configuracion = {
  host: "54.173.202.133", //Direccion IP o nombre del servidor
  port: 3306,
  user: "user4", // mysql -u root -p
  password: "root",
  database: "DuckBusterReviews",
};

const conexion = mysql.createConnection(configuracion);

conexion.execute("SELECT * FROM usuario", (error, resultado, campos) => {
  console.log("Conexion exitosa");
  console.log(resultado);
});
