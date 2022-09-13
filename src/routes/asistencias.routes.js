const router = require('express').Router()
const { getAsistencia, getAsistencias, postAsistencia, putAsistencia } = require('../controllers/asistencias.controllers')

router.get('/', getAsistencias)
router.get('/:id', getAsistencia)
router.post('/', postAsistencia)
router.put('/:id', putAsistencia)

module.exports = router