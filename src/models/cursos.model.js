const { model, Schema } = require('mongoose')

const cursosSchema = new Schema({
  nivel_anio: {
    type: Number,
    require: true
  },
  ciclo_lectivo: {
    type: Date.year // \\
  },
  alumnos: [{
    type: Schema.Types.ObjectId,
    ref: 'personas'
  }],
  materias: [{
    type: Schema.Types.ObjectId,
    ref: 'materias',
  }],
  carrera: [{
    type: Schema.Types.ObjectId,
    ref: 'carreras'
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