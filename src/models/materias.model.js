const { model, Schema } = require('mongoose')

const materiasSchema = new Schema({
  nombre: {
    type: String,
    required: true
  },
  tipo:{
    type: String,
    enum: ['anual', 'cuatrimestral'],
    required: true
  },
  carrera: [{
    type: Schema.Types.ObjectId,
    ref: 'carreras'
  }]
},
{
  timestamps: true,
  versionKey: false
})

module.exports = model('materias', materiasSchema)