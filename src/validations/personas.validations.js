const { body } = require('express-validator')
const { showErrors } = require('../helpers/showErrors')

const vPersonas = [
  body('apellidos')
    .trim()
    .exists()
    .withMessage('Debe ingresar su apellido'),
  body('nombres')
    .trim()
    .exists()
    .withMessage('Debe ingresar su nombre'),
  body('dni')
    .trim()
    .exists()
    .withMessage('Debe ingresar su dni'),
  body('sexo')
    .trim()
    .exists()
    .withMessage('Debe ingresar su sexo')
    .isIn(['F', 'M'])
    .withMessage('El formato del campo sexo es incorrecto'),
  body('direccion')
    .trim()
    .exists()
    .withMessage('Debe ingresar su direccion'),
  body('correo')
    .trim()
    .exists()
    .withMessage('Debe ingresar su correo electrónico')
    .isEmail()
    .withMessage('El formato del correo es incorrecto'),
  body('clave')
    .trim()
    .exists()
    .withMessage('Debe ingresar contraseña')
    .isLength({ min: 8, max: 30 })
    .withMessage('El nombre de usuario debe tener entre 6 y 20 caracteres'),
  body('rol')
    .trim()
    .exists()
    .withMessage('Debe ingresar su rol'),
  (req, res, next) => {
    showErrors(req, res, next)
  }
]

module.exports = { vPersonas }