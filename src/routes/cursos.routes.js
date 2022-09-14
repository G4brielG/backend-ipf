const router = require('express').Router()

// Controllers
const { getCursos, getCurso, postCursos, putCurso, deleteCurso } = require('../controllers/cursos.controllers')

// Middlewares
const { validateLogin, validateAdmin } = require('../middleware/login.middlewares')

// Validations
const { vCursos } = require('../validations/cursos.validarions')

router.get('/', [validateLogin, validateAdmin], getCursos)
router.get('/:id', [validateLogin], getCurso)
router.post('/', [validateLogin, validateAdmin, vCursos], postCursos)
router.put('/:id', [validateLogin, validateAdmin, vCursos], putCurso)
router.delete('/:id', [validateLogin, validateAdmin], deleteCurso)

module.exports = router