const router = require('express').Router()

// Controllers
const { getDocentes, getDocente, postDocente, putDocente, deleteDocente } = require('../controllers/docentes.controllers')

// Middlewares

router.get('/', getDocentes)
router.get('/:id', getDocente)
router.post('/', postDocente)
router.put('/:id', putDocente)
router.delete('/:id', deleteDocente)

module.exports = router