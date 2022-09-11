const router = require('express').Router()

// Controllers
const { getMaterias, getMateria, postMateria, putMateria, deleteMateria } = require('../controllers/materias.controllers')

// Middlewares

router.get('/', getMaterias)
router.get('/:id', getMateria)
router.post('/', postMateria)
router.put('/:id', putMateria)
router.delete('/:id', deleteMateria)

module.exports = router