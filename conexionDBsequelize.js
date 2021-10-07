const Sequelize = require("sequelize");
//p1=Nombre de la base datos CREATE DATABASE base2, p2= user, p3= password
const sequelize = new Sequelize("DuckBusterReviews", "user1", "root", {
  dialect: "mysql", //3306 port
  host: "54.242.195.178",
  define: {
    //Evitar que nos ponga createdAt y updateAt
    timestamps: false,
    //Evitar plural
    freezeTableName: true,
  },
});

//Modelo
const Usuario = sequelize.define("usuario", {
  usuario: {
    type: Sequelize.STRING(30), //Varchar(30)
    allowNull: false,
    primaryKey: true,
  },
  password: {
    type: Sequelize.STRING(15),
    allowNull: false,
  },
});

sequelize
  .sync()
  .then((resultado) => {
    console.log("Conexión exitosa");
    //CRUD //CREATE
    //Primero en ejecutar
    Usuario.create({
      usuario: "prueba2",
      password: "123456",
    })
      .then((resultado) => console.log("Registro Exitoso"))
      .catch((error) => console.log("Usuario existente" + error));

    //Segundo en ejecutar
    //READ1 SELECT * FROM usuario
    Usuario.findAll()
      .then((resultado) => {
        console.log("Usuarios:", resultado);
      })
      .catch((error) => console.log("Hubo un error: " + error));

    //READ 2 SELECT <atributes> FROM modelo WHERE

    //Tercero en ejecutar
    sequelize
      .query("SELECT usuario FROM usuario where usuario='prueba1'", {
        type: Sequelize.QueryTypes.SELECT,
      })
      .then((usuario) => {
        console.log(usuario);
      })
      .catch((error) => console.log(error));

    //DELETE
    Usuario.destroy({
      where: {
        usuario: "prueba1",
      },
    })
      .then((res) => console.log("Registro eliminado"))
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));
