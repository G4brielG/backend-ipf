const { body } = require('express-validator')
const { showErrors } = require('../helpers/showErrors')

const vCarreras = [
  body('nombre')
    .trim()
    .exists()
    .withMessage('Debe ingresar el nombre de la carrera'),
  body('duracion')
    .trim()
    .exists()
    .withMessage('Debe ingresar la duración de la carrera'),
  body('carga_horaria')
    .trim()
    .exists()
    .withMessage('Debe ingresar la carga horaria'),
  (req, res, next) => {
    showErrors(req, res, next)
  }
]

module.exports = { vCarreras }