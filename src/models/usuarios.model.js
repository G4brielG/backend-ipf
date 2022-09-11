const { model, Schema } = require('mongoose')

const docentesSchema = new Schema({
  apellidos: {
    type: String,
    require: true
  },
  nombres: {
    type: String,
    required: true
  },
  dni: {
    type: Number,
    require: true,
    unique: true
  },
  sexo: {
    type: String,
    required: true,
    enum: ['M', 'F']
  },
  direccion: {
    type: String,
    required: true
  },
  correo: {
    type: String,
    unique: true
  },
  clave: {
    type: String
  },
  telefono: {
    type: String,
    default: null
  },
  estado: {
    type: Boolean,
    default: true
  },
  // rol: {
  //   type: String,
  //   enum: ['admin', 'docente', 'alumno']
  // }
})

module.exports = model('usuarios', docentesSchema)