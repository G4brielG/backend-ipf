const router = require('express').Router()

// Controllers
const { getAnuncios, getAnuncio, postAnuncio, putAnuncio, deleteAnuncio } = require('../controllers/anuncios.controllers')

// Middlewares


router.get('/', getAnuncios)
router.get('/:id', getAnuncio)
router.post('/', postAnuncio)
router.put('/:id', putAnuncio)
router.get('/:id', deleteAnuncio)

module.exports = router