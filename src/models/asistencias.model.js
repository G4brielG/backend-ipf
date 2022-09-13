const { model, Schema } = require('mongoose')

const asistenciasSchema = new Schema({
  materia: {
    type: Schema.Types.ObjectId,
    ref: 'materias'
  },
  alumno: {
    type: Schema.Types.ObjectId,
    ref: 'personas'
  },
  asistencia: {
    enum: ['A', 'P']
  }
},
  {
    timestamps: true,
    versionKey: false
  })
module.exports = model('asistencias', asistenciasSchema)