const express = require("express")
const convjController = require('../controllers/consolaVideojuegos')
const router = express.Router()

router.post('/agregarConsolaVideojuegos',convjController.postAgregarConsolaVideojuegos)

router.get('/obtenerConsolaVideojuegos',convjController.getObtenerConsolaVideojuegos)
router.post('/borrarConsolaVideojuegos',convjController.postBorrarConsolaVideojuegos)
router.post('/actualizarConsolaVideojuegos',convjController.postActualizarConsolaVideojuegos)


module.exports = router