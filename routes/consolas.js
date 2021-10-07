const express = require("express")
const vjController = require('../controllers/consolas')
const router = express.Router()

//Formulario de ingreso de datos (front-end) 
//router.get('/agregarVideojuego',vjController.getAgregarVideojuego)
//Servicio para el procesamiento de los datos
router.post('/agregarConsola',vjController.postAgregarConsola)
//Pagina de confirmacion (front-end)
//router.get('/confirmacionDatos',vjController.getConfirmacionDatos)
//Visualización de los datos guardados
router.get('/obtenerConsolas',vjController.getObtenerConsolas)
router.post('/borrarConsola',vjController.postBorrarConsola)
router.post('/actualizarConsola',vjController.postActualizarConsola)


module.exports = router