const { model, Schema } = require('mongoose')

const docentesSchema = new Schema({
  docente: {
    type: Schema.Types.ObjectId,
    ref: 'personas'
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