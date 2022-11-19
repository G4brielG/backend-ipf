const Modelo = require('../models/materias.model')
const controller = {}

controller.getMaterias = async (req, res) => {
  try {
    const materias = await Modelo.find({ estado: true })

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
    const materia = await Modelo.find({ _id: id, estado: true })

    if (materia) {
      return res.status(200).json(materia)
    } else {
      return res.status(400).json({ message: 'No se encontró la materia en la base de datos' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getMateriasAlumno = async (req, res) => {
  try {
    const id = req.params.id
    const Alumnos = await Modelo.find({ alumnos: { $elemMatch: { alumno: id }}, estado: true })
    
    if (Alumnos) {
      return res.status(200).json(Alumnos)
    } else {
      return res.status(400).json({ message: 'El alumno no está asignado a ninguna materia' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getInasistencia = async () => {
  try {
    const id = req.params.id
    const { idMateria } = req.body 
    const Inasistencias = await Modelo.find({ alumnos: { $elemMatch: { alumno: id } }, __id: idMateria, estado: true })
    const { inasistencias } = Inasistencias
    
    if(Inasistencias){
      return res.status(200).json(inasistencias)
    } else {
      return res.status(400).json({ message: 'El alumno no está asignado a ninguna materia' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.getMateriasDocente = async (req, res) => {
  try {
    const id = req.params.id
    const Docente = await Modelo.find({ docentes: { $elemMatch: { docente: id } }, estado: true })

    if (Docente) {
      return res.status(200).json(Docente)
    } else {
      return res.status(400).json({ message: 'El docente no está asignado a ninguna materia' })
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.putNotaAlumno = async (req, res) => {
  try {
    const id = req.params.id
    const Materia = await Modelo.findOne({ id })
    const { alumnos } = Materia
    const [ notas ] = alumnos
    const { notas:notasAlumno } = notas

    notasAlumno.filter((dato, key) => {
      const { _id } = dato
      if(_id == id) {
        Materia.alumnos[0].notas[key] = {
          examen: 'segundo_parcial',
          calificacion: 99
        }
        Materia.save()
      }
    })

    return res.status(200).json(notasAlumno)
  } catch (error) {
    return res.status(500).json(error)
  }
}

controller.postNota = async (req, res) => {
  try {
    const idAlumno = req.params.id

    const {notas:notita} = req.body;

    const alumno = await Modelo.findOne({ alumnos: { $elemMatch: { alumno: idAlumno } }})
    const { alumnos } = alumno;

    alumno.alumnos[0].notas = alumno.alumnos[0].notas.concat(notita);
    alumno.save()
    console.log(alumno);

    return res.status(200).json(alumno)
  } catch (error) {
    console.log(error);
    
  }
}

controller.postMateria = async (req, res) => {
  try {
    const { materia, alumnos } = req.body

    const newMateria = new Modelo({
      materia, alumnos
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
    const { materia, alumnos } = req.body

    await Modelo.findByIdAndUpdate(id, {
      materia, alumnos
    })
    return res.status(201).json({ message: 'La materia se ha actualizado correctamente' })
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