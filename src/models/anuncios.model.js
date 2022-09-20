const { model, Schema } = require('mongoose')

const anunciosSchema = new Schema({
  anuncio: {
    persona: {
      type: Schema.Types.ObjectId,
      ref: 'personas'
    },
    anuncio: {
      type: String
    },
    tipo_anuncio: {
      type: String,
      enum: ['general', 'materia']
    },
    materia: {
      type: Schema.Types.ObjectId,
      ref: 'materias',
    },
  },

  comentarios: [{
    persona: {
      type: Schema.Types.ObjectId,
      ref: 'personas'
    },
    comentario: {
      type: String
    },
    fecha: {
      type: Date,
      default: Date.now()
    }
  }]
},
  {
    timestamps: true,
    versionKey: false
  })

module.exports = model('anuncios', anunciosSchema)