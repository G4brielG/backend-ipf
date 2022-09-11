const { model, Schema } = require('mongoose')

const carrerasSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  duracion: {
    type: String
  },
  carga_horaria: {
    type: Number
  },
  estado: {
    type: Boolean,
    default: true
  }
}) 
module.exports = model('carreras', carrerasSchema)