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
    type: number,
    require: true
  }
},
  {
    timestamps: true,
    versionKey: false
  })
module.exports = model('notas', notasSchema)