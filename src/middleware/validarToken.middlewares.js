const jwt = require('jsonwebtoken')
const Modelo = require('../models/personas.model')
require('dotenv').config()

const validarToken = async (req, res, next) => {
  const token = req.headers.token
  if (!token) {
    return res.status(400).json('Token invalido')
  }

  try {
    const { id } = jwt.verify(token, process.env.FIRMA)
    const usuario = await Modelo.findOne({ _id: id, estado: true })

    if (!usuario) {
      return res.status(400).json('Token invalido')
    }
    next()
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = validarToken