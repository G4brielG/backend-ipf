const { model, Schema } = require('mongoose')

const materiasSchema = new Schema({
  materia: {
    nombre: {
      type: String,
      required: true
    },
    tipo: {
      type: String,
      enum: ['anual', 'cuatrimestral'],
      required: true
    },
    dias: [{
      type: String,
      enum: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"],
      required: true
    }],
    docentes: [{
      docente: {
        type: Schema.Types.ObjectId,
        ref: 'personas',
        required: true
      },
      cargo: {
        type: String,
        enum: ["titular", "auxiliar"],
        required: true
      }
    }],
    estado: {
      type: Boolean,
      default: true
    }
  },
 
  alumnos: [{
    alumno: {
      type: Schema.Types.ObjectId,
      ref: 'personas',
      required: true
    },
    notas: [{
      examen: {
        type: String,
        enum: ["primer_parcial", "segundo_parcial", "primer_recup", "segundo_recup", "final"],
      },
      calificacion: {
        type: Number,
        default: 0
      }
    }],
    inasistencias: [{
      inasistencia: {
        type: Boolean
      },
      fecha: {
        type: Date,
        default: Date.now()
      }
    }]
  }]
},
  {
    timestamps: true,
    versionKey: false
  })

module.exports = model('materias', materiasSchema)