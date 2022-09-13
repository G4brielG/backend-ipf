const Modelo = require('../models/materias.model')
const controller = {}

controller.getMaterias = async (req, res) => {
  try {
    const materias = await Modelo.find({ estado: true }).populate('carrera', {
      estado: 0,
    })

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
    const materia = await Modelo.find({ _id: id, estado: true }).populate('carrera', {
      estado: 0,
    })

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
    const { nombre, tipo, dias, carrera } = req.body

    const newMateria = new Modelo({
      nombre, tipo, dias, carrera
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
    const { nombre, tipo, dias, carrera } = req.body

    await Modelo.findByIdAndUpdate(id, {
      nombre, tipo, dias, carrera
    })
    return res.status(201).json({ message: 'La carrera se ha actualizado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.deleteMateria = async (req, res) => {
  try {
    const id = req.params.id
    await Modelo.findByIdAndUpdate(id, { estado: false })
    return res.status(200).json({ message: 'La materia ha sido inhabilitada' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller;