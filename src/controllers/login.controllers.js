const Modelo = require('../models/personas.model')
const bcryptjs = require('bcryptjs');
const createJwt = require('../helpers/generar_jwt')
const controller = {}

controller.login = async (req, res) => {
  const { correo, clave } = req.body

  try {
    const user = await Modelo.findOne({ correo: correo })
    if (user) {
      if (user.estado) {
        const validation = bcryptjs.compareSync(clave, user.clave)

        if (validation) {
          const { _id } = user
          const token = await createJwt(_id)
          return res.status(200).json({ user: { token } })
        }

        return res.status(400).json({ message: 'Contraseña incorrecta' })
      }
      return res.status(400).json({ message: 'El usuario está inhabilitado' })
    }
    return res.status(400).json({ message: 'Usuario no encontrado' })
  } catch (error) {
    res.status(500).json({ message: error })
  }
}

module.exports = controller
