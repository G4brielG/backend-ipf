const jwt = require('jsonwebtoken')
const Modelo = require('../models/personas.model')
const middleware = {}

middleware.validateLogin = async (req, res, next) => {
  try {
    const token = req.header('auth-token')

    if (!token) {
      return res.status(400).json({ message: 'Error de autenticacion' })
    }

    const { id } = jwt.verify(token, process.env.FIRMA)

    if (id) {
      const usuario = await Modelo.find({ _id: id})

      if (usuario) {
        if (usuario.estado === false) {
          return res.status(401).json({ message: 'El usuario está inhabilitado' })
        }else{
          return next()
        }
      }
    }
    return res.status(401).json({ message: 'Debe loguearse para acceder' })
  } catch (error) {
    res.status(500).json(error)
  }
}

middleware.validateAdmin = async (req, res, next) => {
  const token = req.header('auth-token')
  const { id } = jwt.verify(token, process.env.FIRMA)

  const user = await Modelo.findOne({ _id: id })
  
  if (user) {
    if (user.rol === 'admin') {
      return next()
    }
  } else {
    return res.status(401).json({ message: 'No se encontró el usuario' })
  }
  return res.status(401).json({ message: 'Debes tener acceso de administrador para realizar esta acción' })
}

middleware.validateDocente = async (req, res, next) => {
  const token = req.header('auth-token')
  const { id } = jwt.verify(token, process.env.FIRMA)

  const user = await Modelo.findOne({ _id: id })

  if (user) {
    if (user.rol === 'docente') {
      return next()
    }
  } else {
    return res.status(401).json({ message: 'No se encontró el usuario' })
  }
  return res.status(401).json({ message: 'Debes tener acceso de docente para realizar esta acción' })
}

middleware.validateAlumno = async (req, res, next) => {
  const token = req.header('auth-token')
  const { id } = jwt.verify(token, process.env.FIRMA)

  const user = await Modelo.findOne({ _id: id })

  if (user) {
    if (user.rol === 'alumno') {
      return next()
    }
  } else {
    return res.status(401).json({ message: 'No se encontró el usuario' })
  }
  return res.status(401).json({ message: 'Debes tener acceso de alumno para realizar esta acción' })
}

middleware.validateAdminDocente = async (req, res, next) => {
  const token = req.header('auth-token')
  const { id } = jwt.verify(token, process.env.FIRMA)

  const user = await Modelo.findOne({ _id: id })

  if (user) {
    if (user.rol === 'admin' || user.rol === 'docente') {
      return next()
    }
  } else {
    return res.status(401).json({ message: 'No se encontró el usuario' })
  }
  return res.status(401).json({ message: 'Debes tener acceso de administrador o docente para realizar esta acción' })
}

module.exports = middleware
