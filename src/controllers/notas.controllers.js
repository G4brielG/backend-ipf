const Modelo = require('../models/notas.model')
const controller = {}

controller.getNotas = async (req, res) => {
  try {
    const notas = await Modelo.find()

    if (notas) {
      return res.status(200).json(notas)
    } else {
      return res.status(400).json({ message: 'No se encontró ninguna calificación en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getNota = async (req, res) => {
  try {
    const id = req.params.id
    const nota = await Modelo.find({ _id: id })

    if (nota) {
      return res.status(200).json(nota)
    } else {
      return res.status(400).json({ message: 'No se encontró la calificación en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postNota = async (req, res) => {
  try {
    const { materia, alumno, nota } = req.body

    const newAnuncio = new Modelo({
      materia, alumno, nota
    })
    await newAnuncio.save()
    return res.status(201).json({ message: 'El anuncio ha sido publicado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putNota = async (req, res) => {
  try {
    const id = req.params.id
    const { materia, alumno, nota } = req.body

    await Modelo.findByIdAndUpdate(id, {
      materia, alumno, nota
    })
    return res.status(201).json({ message: 'La calificación se modificó correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller