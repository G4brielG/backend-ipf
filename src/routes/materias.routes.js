const router = require('express').Router()

// Controllers
const { getMaterias, getMateria, postMateria, putMateria, deleteMateria, getMateriasAlumno, getMateriasDocente, putNotaAlumno, postNota } = require('../controllers/materias.controllers')

// Middlewares
const { validateLogin, validateAdmin } = require('../middleware/login.middlewares')

// Validarions
const { vMaterias } = require('../validations/materias.validations')

router.get('/', [validateLogin, validateAdmin], getMaterias)
router.get('/:id', [validateLogin, validateAdmin], getMateria)
router.get('/alumnos/:id', [validateLogin], getMateriasAlumno)
router.get('/docentes/:id', [validateLogin], getMateriasDocente)
router.post('/', [validateLogin], postMateria)
router.post('/notas_materias/:id', postNota)
router.put('/:id', [validateLogin, validateAdmin], putMateria)
router.put('/nota-alumno/:id', putNotaAlumno)
router.delete('/:id', [validateLogin, validateAdmin], deleteMateria)

module.exports = router