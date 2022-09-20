const router = require('express').Router()

// Controllers
const { getMaterias, getMateria, postMateria, putMateria, deleteMateria } = require('../controllers/materias.controllers')

// Middlewares
const { validateLogin, validateAdmin } = require('../middleware/login.middlewares')

// Validarions
const { vMaterias } = require('../validations/materias.validations')

router.get('/', [validateLogin, validateAdmin], getMaterias)
router.get('/:id', [validateLogin, validateAdmin], getMateria)
router.post('/', postMateria)
router.put('/:id', [validateLogin, validateAdmin, vMaterias], putMateria)
router.delete('/:id', [validateLogin, validateAdmin], deleteMateria)

module.exports = router