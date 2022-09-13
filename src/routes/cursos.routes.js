const router = require('express').Router()
const { getCursos, getCurso, postCursos, putCurso, deleteCurso } = require('../controllers/cursos.controllers')

router.get('/', getCursos)
router.get('/:id', getCurso)
router.post('/', postCursos)
router.put('/:id', putCurso)
router.delete('/:id', deleteCurso)

module.exports = router