const Modelo = require('../models/cursos.model')
const controller = {}

controller.getCursos = async (req, res) => {
  try {
    const cursos = await Modelo.find({ estado: true })

    if (cursos) {
      return res.status(200).json(cursos)
    } else {
      return res.status(400).json({ message: 'No se encontró ningun curso en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getCurso = async (req, res) => {
  try {
    const id = req.params.id
    const curso = await Modelo.find({ _id: id, estado: true })

    if (curso) {
      return res.status(200).json(curso)
    } else {
      return res.status(400).json({ message: 'No se encontró el curso en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postCursos = async (req, res) => {
  try {
    const { nivel_anio, ciclo_lectivo, alumnos, materias, carrera } = req.body

    const newAnuncio = new Modelo({
      nivel_anio, ciclo_lectivo, alumnos, materias, carrera
    })
    await newAnuncio.save()
    return res.status(201).json({ message: 'El curso se ha agregado correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putCurso = async (req, res) => {
  try {
    const id = req.params.id
    const { nivel_anio, ciclo_lectivo, alumnos, materias, carrera } = req.body

    await Modelo.findByIdAndUpdate(id, {
      nivel_anio, ciclo_lectivo, alumnos, materias, carrera
    })
    return res.status(201).json({ message: 'El curso se modificó correctamente' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.deleteCurso = async (req, res) => {
  try {
    const id = req.params.id
    await Modelo.findByIdAndUpdate(id, { estado: false })
    return res.status(200).json({ message: 'El curso ha sido eliminado' })
  } catch (error) {
    return res.status(500).json(error)
  }
}

module.exports = controller