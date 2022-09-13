const { model, Schema } = require('mongoose')

const cursosSchema = new Schema({
  alumnos: [{
    type: Schema.Types.ObjectId,
    ref: 'personas'
  }],
  materias: [{
    type: Schema.Types.ObjectId,
    ref: 'materias',
  }],
  estado: {
    type: Boolean,
    default: true
  }
},
  {
    timestamps: true,
    versionKey: false
  })
module.exports = model('cursos', cursosSchema)