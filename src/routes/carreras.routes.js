const router = require('express').Router()

// Controllers
const { getCarreras, getCarrera, postCarrera, putCarrera, deleteCarrera } = require('../controllers/carreras.controllers')

// Middlewares

router.get('/', getCarreras)
router.get('/:id', getCarrera)
router.post('/', postCarrera)
router.put('/:id', putCarrera)
router.delete('/:id', deleteCarrera)

module.exports = router