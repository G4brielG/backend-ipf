> **LOG DE DESARROLLO**

Expedientes
  1. <span style="color:orange">07-09-22</span> Diseño de modelos. <span style="color:green">✔</span>
  2. <span style="color:orange">11-09-22</span> Creacion de modelo, controladores y rutas básicas (crud) de: <br>
  usuarios, docentes, carreras, materias y login. <span style="color:green">✔</span> <br>
  Middleware de verificación de logueo y de rol de admin. <span style="color:green">✔</span> 
  3. <span style="color:orange">12-09-22</span> Cambié el modelo usuarios por modelo personas. Agregué modelos notas, asistencias y cursos. <span style="color:green">➕➖</span>
  4. <span style="color:orange">13-09-22</span> Cambios en los modelos asistencias y cursos. Agregué modelo anuncios. Realicé controladores y rutas básicas (crud) de anuncios, asistencia y notas. Middleware de validación de rol docente y alumno. <span style="color:green">✔</span>
  5. <span style="color:orange">14-09-22</span> Agregué el atributo documentaciones en el modelo personas. <span style="color:green">✔</span><br>
  Realicé validaciones del esquema personas, carreras, materias, docentes. <span style="color:green">✔</span><br>
  Creé un middleware para validar roles AdminDocentes. <span style="color:green">✔</span>
  6. <span style="color:orange">20-09-22</span> Reemplanteé el modelo de la bd, en el modelo de materias agregué notas y asistencias de los alumnos, en el modelo de carreras incorporé el modelo de cursos, al modelo docentes lo incorporé en materias. <br>
  modelos actuales: Anuncios, carreras, materias y personas
  7. <span style="color:orange">21-09-22</span> Agregué controlador y ruta para cambio de contraseña
  8. <span style="color:orange">05-09-22</span> Listar:
    - materias y notas de un alumno
    - inasistencia de un alumno
    - materias que dicta un docente
    - alumnos de una materia
    - alumnos por curso