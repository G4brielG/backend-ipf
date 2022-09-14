const router = require('express').Router()

// Controllers
const { getCarreras, getCarrera, postCarrera, putCarrera, deleteCarrera } = require('../controllers/carreras.controllers')

// Middlewares
const { validateLogin, validateAdmin } = require('../middleware/login.middlewares')

// Validarions
const { vCarreras } = require('../validations/carreras.validations')

router.get('/', [validateLogin, validateAdmin], getCarreras)
router.get('/:id', [validateLogin, validateAdmin], getCarrera)
router.post('/', [validateLogin, validateAdmin, vCarreras], postCarrera)
router.put('/:id', [validateLogin, validateAdmin, vCarreras], putCarrera)
router.delete('/:id', [validateLogin, validateAdmin], deleteCarrera)

module.exports = router