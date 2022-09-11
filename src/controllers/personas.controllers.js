const modelo = require('../models/usuarios.model')
const controller = {}

controller.getPersonas = async (req, res) => {
  try {
    const materias = await modelo.find({ estado: true })

    if (materias) {
      return res.status(200).json(materias)
    } else {
      return res.status(400).json({ message: 'No se encontró ninguna materia en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getMateria = async (req, res) => {
  try {
    const id = req.params.id
    const materia = await modelo.find({ _id: id, estado: true })

    if (materia) {
      return res.status(200).json(materia)
    } else {
      return res.status(400).json({ message: 'No se encontró la materia en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postMateria = async (req, res) => {
  try {
    const { nombre, duracion, carga_horaria } = req.body

    const newMateria = new modelo({
      nombre, duracion, carga_horaria
    })
    await newMateria.save()
    return res.status(201).json({ message: 'La materia se ha agregado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putMateria = async (req, res) => {
  try {
    const id = req.params.id
    const { nombre, duracion, carga_horaria } = req.body

    await modelo.findByIdAndUpdate(id, {
      nombre, duracion, carga_horaria
    })
    return res.status(201).json({ message: 'La carrera se ha actualizado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.deleteMateria = async () => {
  try {
    const id = req.params.id
    await modelo.findByIdAndUpdate(id, { estado: false })
    return res.status(200).json({ message: 'La materia ha sido inhabilitada' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller;