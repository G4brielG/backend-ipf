const { model, Schema } = require('mongoose')

const notasSchema = new Schema({
  materia: {
    type: Schema.Types.ObjectId,
    ref: 'materias',
  },
  alumno: {
    type: Schema.Types.ObjectId,
    ref: 'personas',
  },
  nota: {
    type: Number,
    default: 0
  }
},
  {
    timestamps: true,
    versionKey: false
  })
module.exports = model('notas', notasSchema)