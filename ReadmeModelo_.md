**MODELO DE BD**
  
  
><span style="color: orange">Personas</span>
  
En esta colección tomo los datos básicos y necesarios de las personas independientemente del rol que posea en la institución
  
````
  apellidos
  nombres
  dni
  sexo
  direccion
  correo
  telefono
  documentaciones
  clave
  rol: { // roles definidos
    enum: ['admin', 'docente', 'alumno']
  }
````
  
><span style="color: orange">Carreras</span>
  
En esta colección tomo datos básicos de las carreras y datos de los cursos que pertenecen a esa carrera
  
````
carrera: {
    nombre
    duracion
    carga_horaria
    estado
  },
  
  // muchos cursos pertenecen a una carrera
  cursos: [{
    nivel_anio
    ciclo_lectivo
    materias
    estado
  }]
````
  
><span style="color: orange">Materias</span>
  
En esta colección tomo los datos de la materia y también datos de notas y asistencias, decidí incoporar estos en materias ya que se encuentran directamente relacionados
  
````
materia: {
    nombre
    tipo
  
    // una materia puede tener muchos docentes
    docentes: [{ 
      docente
      cargo: { // diferentes cargos
        enum: ["titular", "auxiliar"],
      }
    }],
  },
  
  // una materia tiene muchos alumnos
  alumnos: [{
    alumno: {
      type: Schema.Types.ObjectId,
      ref: 'personas',
    },
  
    // un alumno mas de una nota
    notas: [{
      nota: [{
        examen: {
          enum: ["primer_parcial", "segundo_parcial", "primer_recup", "segundo_recup", "final"],
        },
        calificacion
      }],
    }],
  
    // un alumno tiene muchas asistencias
    // de diferentes fechas
    asistencias: [{
      asistencia: {
        enum: ['A', 'P']
      },
      fecha: {
        default: Date.now()
      }
    }]
  }]
````
  
><span style="color: orange">Anuncios</span>
  
````
anuncio: {
    persona: {  // autor del anuncio
      ref: 'personas'
    },
    fecha: {
      default: Date.now()
    },
    anuncio,
    tipo_anuncio: {
      enum: ['general', 'materia']
    },
    materia: {
      ref: 'materias',
    },
  },
  
  // un anuncio puede tener muchos comentarios
  comentarios: [{
    persona: {  // autor del comentario
      ref: 'personas'
    },
    comentario
    fecha: {
      default: Date.now()
    }
  }]
````
  