const { model, Schema } = require('mongoose')

const carrerasSchema = new Schema({
  carrera: {
    nombre: {
      type: String
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

  cursos: [{
    nivel_anio: {
      type: Number,
    },
    ciclo_lectivo: {
      type: Date
    },
    materias: [{
      type: Schema.Types.ObjectId,
      ref: 'materias'
    }],
    estado: {
      type: Boolean,
      default: true
    }
  }]
},
{
  timestamps: true,
  versionKey: false
}) 
module.exports = model('carreras', carrerasSchema)