const Sequelize = require("sequelize");
const Videojuego = (sequelize) => {
  sequelize.define("videojuego", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: Sequelize.STRING,
  });
};
module.exports = Videojuego;
