const Modelo = require('../models/docentes.model')
const controller = {}

controller.getDocentes = async (req, res) => {
  try {
    const docentes = await Modelo.find({ estado: true })
      .populate('usuario')
      .populate('materias_docente')
    
    console.log(docentes)
    if (docentes) {
      return res.status(200).json(docentes)
    } else {
      return res.status(400).json({ message: 'No se encontró ningun docente en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getDocente = async (req, res) => {
  try {
    const id = req.params.id
    const docente = await Modelo.find({ _id: id, estado: true })

    if (docente) {
      return res.status(200).json(docente)
    } else {
      return res.status(400).json({ message: 'No se encontró el docente en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postDocente = async (req, res) => {
  try {
    const { usuario, materias } = req.body

    const newDocente = new Modelo({
      usuario, materias
    })
    await newDocente.save()
    return res.status(201).json({ message: 'El docente ha sido agregado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putDocente = async (req, res) => {
  try {
    const id = req.params.id
    const { usuario, materias } = req.body

    await Modelo.findByIdAndUpdate(id, {
      usuario, materias
    })
    return res.status(201).json({ message: 'Se actualizó correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.deleteDocente = async () => {
  try {
    const id = req.params.id
    await Modelo.findByIdAndUpdate(id, { estado: false })
    return res.status(200).json({ message: 'El docente ha sido inhabilitado' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller