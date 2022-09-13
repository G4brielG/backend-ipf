const { model, Schema } = require('mongoose')

const personasSchema = new Schema({
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
    required: true,
    unique: true
  },
  clave: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    default: null
  },
  rol: {
    type: String,
    enum: ['admin', 'docente', 'alumno']
  },
  estado: {
    type: Boolean,
    default: true
  }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = model('personas', personasSchema)