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
},
{
  timestamps: true,
  versionKey: false
}) 
module.exports = model('carreras', carrerasSchema)