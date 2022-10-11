const Modelo = require('../models/anuncios.model')
const controller = {}

controller.getAnuncios = async (req, res) => {
  try {
    const anuncios = await Modelo.find({ estado: true })

    if (anuncios) {
      return res.status(200).json(anuncios)
    } else {
      return res.status(400).json({ message: 'No se encontró ningun anuncio en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getAnuncio = async (req, res) => {
  try {
    const id = req.params.id
    const anuncio = await Modelo.find({ _id: id, estado: true })

    if (anuncio) {
      return res.status(200).json(anuncio)
    } else {
      return res.status(400).json({ message: 'No se encontró el anuncio en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getAnuncioMateria = async (req, res) => {
  try {
    const id = req.params.id
    const anuncio = await Modelo.find({ _id: id, estado: true })

    if (anuncio) {
      return res.status(200).json(anuncio)
    } else {
      return res.status(400).json({ message: 'No se encontró el anuncio en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postAnuncio = async (req, res) => {
  try {
    const { anuncio, comentarios } = req.body

    const newAnuncio = new Modelo({
      anuncio, comentarios
    })
    await newAnuncio.save()
    return res.status(201).json({ message: 'El anuncio ha sido publicado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putAnuncio = async (req, res) => {
  try {
    const id = req.params.id
    const { anuncio, comentarios } = req.body

    await Modelo.findByIdAndUpdate(id, {
      anuncio, comentarios
    })
    return res.status(201).json({ message: 'El anuncio se modificó correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.deleteAnuncio = async (req, res) => {
  try {
    const id = req.params.id
    await Modelo.findByIdAndUpdate(id, { estado: false })
    return res.status(200).json({ message: 'El anuncio ha sido eliminado' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller