const { model, Schema } = require('mongoose')

const anunciosSchema =  new Schema({
  persona: {
    type: Schema.Types.ObjectId,
    ref: 'personas'
  },
  anuncio: {
    type: String
  },
  tipo_anuncio: {
    enum: ['general', 'carrera', 'materia']
  },
  carrera: {
    type: Schema.Types.ObjectId,
    ref: 'carreras'
  },
  materia: {
    type: Schema.Types.ObjectId,
    ref: 'materias',
  },
},
{
  timestamps: true,
  versionKey: false
})

module.exports = model('anuncios', anunciosSchema)