const { body } = require('express-validator')
const { showErrors } = require('../helpers/showErrors')

const vDocentes = [
  body('docente')
    .trim()
    .exists()
    .withMessage('Debe ingresar el docente'),
  body('materias_docente')
    .trim()
    .exists()
    .withMessage('Debe ingresar al menos 1 materia'),
  (req, res, next) => {
    showErrors(req, res, next)
  }
]

module.exports = { vDocentes }