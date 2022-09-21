const jwt = require('jsonwebtoken')
const Modelo = require('../models/personas.model')
const bcrypt = require('bcrypt')
const controller = {}

controller.getUsuarios = async (req, res) => {
  try {
    const usuarios = await Modelo.find({ estado: true })
    if (usuarios) {
      return res.status(200).json(usuarios);
    }else{
      return res.status(400).json({ message: 'No se encontró ningun usuario en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error);
  }
}

controller.getUsuario = async (req, res) => {
  try {
    const token = req.header('auth-token')
    const { id } = jwt.verify(token, process.env.FIRMA)
    const user = await Modelo.findById(req.params.id)
    
    // un usuario puede ver sus datos
    if(id == user._id) {
        return res.status(200).json(user)
    } else {
      return res.status(203).json({ message: 'La información que solicita no está disponible' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postUsuario = async (req, res) => {
  try {
    const { apellidos, nombres, dni, sexo, direccion, correo, telefono, documentaciones, rol } = req.body
    const newUser = new Modelo({
      apellidos, nombres, dni, sexo, direccion, correo, telefono, documentaciones, rol
    })
    await newUser.save()
    return res.status(201).json({ message: 'El usuario ha sido creado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.updateClave = async () => {
  try {
    const token = req.header('auth-token')
    const { id } = jwt.verify(token, process.env.FIRMA)
    const user = await Modelo.findById(id)

    if (user) {
      const { clave, old_clave } = req.body
      const validation = bcrypt.compareSync(old_clave, user.clave)
      
      if (validation) {
        const hashClave = await bcrypt.hash(clave, 10)
        await Modelo.findByIdAndUpdate(req.params.id, { clave: hashClave })
        return res.status(201).json({ message: 'Se ha modificado la contraseña' })
      } else {
        return res.status(400).json({ message: 'La contraseña es incorrecta' })
      }
    } else {
      return res.status(400).json({ message: 'No se ha encontrado el usuario' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putUsuario = async (req, res) => {
  try {
    const token = req.header('auth-token')
    const { id } = jwt.verify(token, process.env.FIRMA)
    const user = await Modelo.findById(id)

    if (id == user._id) {
      await Modelo.findByIdAndUpdate(id, { apellidos, nombres, dni, sexo, direccion, correo, telefono, documentaciones, rol })
      return res.status(200).json({ message: 'Los datos han sido modificado correctamente' })
    } else {
      return res.status(203).json({ message: 'La información que solicita no está disponible' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.deleteUsuario = async (req, res) => {
  try {
    const token = req.header('auth-token')
    const { id } = jwt.verify(token, process.env.FIRMA)
    const user = await Modelo.findById(req.params.id)
    
    if (id == user._id || user.rol == "admin") {
      await Modelo.findByIdAndUpdate(id, { estado: false })
      return res.status(200).json({ message: 'EL usuario ha sido inhabilitado correctamente' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller