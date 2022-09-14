const { body } = require('express-validator')
const { showErrors } = require('../helpers/showErrors')

const vCursos = [
  body('nivel_anio')
    .trim()
    .exists()
    .withMessage('Debe ingresar el nombre de la carrera')
    .isNumeric()
    .withMessage('Debe ingresar un dato numérico del nivel de año'),
  body('ciclo_lectivo')
    .trim()
    .exists()
    .withMessage('Debe ingresar el ciclo lectivo del curso'),
  body('alumnos')
    .trim()
    .exists()
    .withMessage('Debe asignar los alumnos pertenecientes al curso'),
  body('materias')
    .trim()
    .exists()
    .withMessage('Debe ingresar las materias dictadas'),
  body('carrera')
    .trim()
    .exists()
    .withMessage('Debe ingresar a que carrera pertenece el curso'),
  (req, res, next) => {
    showErrors(req, res, next)
  }
]

module.exports = { vCursos }