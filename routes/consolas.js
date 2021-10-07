const express = require("express")
const conController = require('../controllers/consolas')
const router = express.Router()

//Formulario de ingreso de datos (front-end) 
//router.get('/agregarVideojuego',vjController.getAgregarVideojuego)
//Servicio para el procesamiento de los datos
router.post('/agregarConsola',conController.postAgregarConsola)
//Pagina de confirmacion (front-end)
//router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
//Visualización de los datos guardados
router.get('/obtenerConsolas',conController.getObtenerConsolas)
router.post('/borrarConsola',conController.postBorrarConsola)
router.post('/actualizarConsola',conController.postActualizarConsola)


module.exports = router