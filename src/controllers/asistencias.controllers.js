const Modelo = require('../models/asistencias.model')
const controller = {}

controller.getAsistencias = async (req, res) => {
  try {
    const asistencias = await Modelo.find({ estado: true })

    if (asistencias) {
      return res.status(200).json(asistencias)
    } else {
      return res.status(400).json({ message: 'No se encontró ninguna asistencia en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getAsistencia = async (req, res) => {
  try {
    const id = req.params.id
    const asistencia = await Modelo.find({ _id: id, estado: true })

    if (asistencia) {
      return res.status(200).json(asistencia)
    } else {
      return res.status(400).json({ message: 'No se encontró la asistencia en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postAsistencia = async (req, res) => {
  try {
    const { materia, alumno, asistencia } = req.body

    const newAsistencia = new Modelo({
      materia, alumno, asistencia
    })
    await newAsistencia.save()
    return res.status(201).json({ message: 'La asistencia ha sido guardada correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putAsistencia = async (req, res) => {
  try {
    const id = req.params.id
    const { materia, alumno, asistencia } = req.body

    await Modelo.findByIdAndUpdate(id, {
      materia, alumno, asistencia
    })
    return res.status(201).json({ message: 'La asistencia se modificó correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller