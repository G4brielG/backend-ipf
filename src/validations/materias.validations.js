const { body } = require('express-validator')
const { showErrors } = require('../helpers/showErrors')

const vMaterias = [
  body('nombre')
    .trim()
    .exists()
    .withMessage('Debe ingresar el nombre de la carrera'),
  body('tipo')
    .trim()
    .exists()
    .withMessage('Debe ingresar el tipo de materia')
    .isIn(['anual', 'cuatrimestral']),
  body('dias')
    .trim()
    .exists()
    .withMessage('Debe ingresar los dias que se dicta la materia')
    .isIn(['Lunes', 'Martes', 'Miércoles,', 'Jueves', 'Viernes'])
    .withMessage('Solo se permite de lunes a viernes'),
  (req, res, next) => {
    showErrors(req, res, next)
  }
]

module.exports = { vMaterias }