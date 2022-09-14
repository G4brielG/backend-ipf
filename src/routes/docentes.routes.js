const router = require('express').Router()

// Controllers
const { getDocentes, getDocente, postDocente, putDocente, deleteDocente } = require('../controllers/docentes.controllers')

// Middlewares
const { validateLogin, validateAdmin, validateAdminDocente } = require('../middleware/login.middlewares')

router.get('/', [validateLogin, validateAdmin], getDocentes)
router.get('/:id', [validateLogin, validateAdminDocente], getDocente)
router.post('/', [validateLogin, validateAdmin], postDocente)
router.put('/:id', [validateLogin, validateAdminDocente], putDocente)
router.delete('/:id', [validateLogin, validateAdmin], deleteDocente)

module.exports = router