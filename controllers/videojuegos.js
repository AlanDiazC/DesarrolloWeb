const path = require("path");
const Videojuego = require("../utils/database").models.videojuego;

exports.postAgregarVideojuego = (req, res) => {
  console.log(req.body); //<={id: number,nombre:text}
  Videojuego.create(req.body)
    .then((vj) => {
      console.log("Registro Existoso");
      res.json({ estado: "aceptado" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ estado: "error" });
    });
};

exports.getObtenerVideojuegos = (req, res) => {
  Videojuego.findAll()
    .then((videojuegos) => {
      console.log(videojuegos);
      res.json(videojuegos);
    })
    .catch((err) => console.log(err));
};

exports.postBorrarVideojuego = (req, res) => {
  console.log(req.body);
  Videojuego.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then(() => {
      console.log("Videojuego eliminado");
      res.json({ estado: "aceptado" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ estado: "error" });
    });
};

exports.postActualizarVideojuego = (req, res) => {
  console.log(req.body);
  Videojuego.update(
    {
      nombre: req.body.nombre,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then(() => {
      console.log("Videojuego actualizado");
      res.json({ estado: "aceptado" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ estado: "error" });
    });
};
