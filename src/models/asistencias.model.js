const { model, Schema } = require('mongoose')

const asistenciasSchema = new Schema({
  curso: {
    type: Schema.Types.ObjectId,
    ref: 'cursos'
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