const express = require("express")
const path = require("path"); // Windows \  Mac o Linux /
//Cargar el objeto de conexiónn a la base
const sequelize = require("./utils/database");

//Importar rutas
const vjRoutes = require("./routes/videojuegos");
const conRoutes = require("./routes/consolas");
const convjRoutes = require("./routes/consolaVideojuego");
// const conVjRoutes = require("./routes/consolaVideojuego");

//Crear una aplicación web
const app = express()

//Establecer un middleware que configure donde se encuentran los
//recursos públicos
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//Vinculamos la aplicación con los recursos de videojuegos
app.use("/videojuegos", vjRoutes);
app.use("/consolas", conRoutes);
app.use("/consolaVideojuego", convjRoutes);

//sequelize.sync({force:true})
sequelize
  .sync()
  .then(
    app.listen(8083, () => {
      console.log("Servidor online en el puerto 8083");
    })
  )
  .catch((err) => console.log(err));