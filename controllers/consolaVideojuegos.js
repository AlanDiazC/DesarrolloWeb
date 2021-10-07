const path = require("path");
const ConsolaVideojuego = require("../utils/database").models.consolaVideojuego;

exports.postAgregarConsolaVideojuegos = (req, res) => {
  console.log(req.body); 
  ConsolaVideojuego.create(req.body)
    .then((consvj) => {
      console.log("Registro Existoso");
      res.json({ estado: "aceptado" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ estado: "error" });
    });
};

exports.getObtenerConsolaVideojuegos = (req, res) => {
    ConsolaVideojuego.findAll()
    .then((consvj) => {
        console.log(consvj);
        res.json(consvj);
    })
    .catch((err) => console.log(err));
};

exports.postBorrarConsolaVideojuegos = (req, res) => {
  console.log(req.body);
  ConsolaVideojuego.destroy({
    where: {
      idCV: req.body.idCV,
    },
  })
    .then(() => {
      console.log("ConsolaVideojuego eliminado");
      res.json({ estado: "aceptado" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ estado: "error" });
    });
};

exports.postActualizarConsolaVideojuegos = (req, res) => {
  console.log(req.body);
  ConsolaVideojuego.update(
    {
        lanzamiento: req.body.lanzamiento,
        videojuegoID: req.body.videojuegoID,
        consolaID: req.body.consolaID
    },
    {
      where: {
        idCV: req.body.idCV,
      },
    }
  )
    .then(() => {
      console.log("ConsolaVideojuego actualizado");
      res.json({ estado: "aceptado" });
    })
    .catch((err) => {
      console.log(err);
      res.json({ estado: "error" });
    });
};
