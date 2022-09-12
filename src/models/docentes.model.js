const { model, Schema } = require('mongoose')

const docentesSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'usuarios'
  },
  materias_docente: [{
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

module.exports = model('docentes', docentesSchema)