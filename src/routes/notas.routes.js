const router = require('express').Router()
const { getNotas, getNota, postNota, putNota } = require('../controllers/notas.controllers')

router.get('/', getNotas)
router.get('/:id', getNota)
router.post('/', postNota)
router.put('/:id', putNota)

module.exports = router