const Modelo = require('../models/carreras.model')
const controller = {}

controller.getCarreras = async (req, res) => {
  try {
    const carreras = await Modelo.find({ estado: true })

    if (carreras) {
      return res.status(200).json(carreras)
    } else {
      return res.status(400).json({ message: 'No se encontró ninguna carrera en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getCarrera = async (req, res) => {
  try {
    const id  = req.params.id
    const carrera = await Modelo.find({ _id: id, estado: true })

    if (carrera) {
      return res.status(200).json(carrera)
    } else {
      return res.status(400).json({ message: 'No se encontró la carrera en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postCarrera = async (req, res) => {
  try {
    const {carrera, curso} = req.body

    const newCarrera = new Modelo({
      carrera, curso
    })
    await newCarrera.save()
    return res.status(201).json({ message: 'La carrera se ha agregado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putCarrera = async (req, res) => {
  try {
    const id = req.params.id
    const { carrera, curso } = req.body

    await Modelo.findByIdAndUpdate(id, {
      carrera, curso
    })
    return res.status(201).json({ message: 'La carrera se ha actualizado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.deleteCarrera = async (req, res) => {
  try {
    const id = req.params.id
    await Modelo.findByIdAndUpdate(id, { estado: false })
    return res.status(200).json({ message: 'La carrera ha sido inhabilitada' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller