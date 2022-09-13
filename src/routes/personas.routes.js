const router = require('express').Router()

// Controllers
const { getUsuarios, getUsuario, postUsuario, putUsuario, deleteUsuario } = require('../controllers/personas.controllers')

// Middlewares
const { validateLogin, validateAdmin } = require('../middleware/login.middlewares')

// Validations
const { vPersonas } = require('../validations/personas.validations')

router.get('/', [validateLogin, validateAdmin], getUsuarios)
router.get('/:id', [validateLogin], getUsuario)
router.put('/:id', [validateLogin, vPersonas], putUsuario)
router.post('/', [vPersonas], postUsuario)
router.delete('/:id', [validateLogin, validateAdmin], deleteUsuario)

module.exports = router