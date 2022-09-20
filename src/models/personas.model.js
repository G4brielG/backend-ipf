const { model, Schema } = require('mongoose')

const personasSchema = new Schema({
  datos_personales: {
    apellidos: {
      type: String,
      required: true
    },
    nombres: {
      type: String,
      required: true
    },
    dni: {
      type: Number,
      unique: true,
      required: true
    },
    sexo: {
      type: String,
      enum: ['M', 'F'],
      required: true
    },
    direccion: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      unique: true,
      required: true
    },
    telefono: {
      type: String,
      default: null
    },
    documentaciones: [{
      type: String
    }],
  },

  usuario: {
    nombre_usuario: {
      type: String,
      required: true
    },
    clave: {
      type: String,
      required: true
    },
    rol: {
      type: String,
      enum: ['admin', 'docente', 'alumno'],
      required: true
    },
    estado: {
      type: Boolean,
      default: true
    }
  }
},
{
  timestamps: true,
  versionKey: false
})

module.exports = model('personas', personasSchema)