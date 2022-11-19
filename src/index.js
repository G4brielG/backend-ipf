const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
require('./database')
require('dotenv').config()

// Middlewares
app.use(express.json())
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(cors({
  origin: '*'
}))

// Rutes
app.use('/login', require('./routes/login.routes'))
app.use('/personas', require('./routes/personas.routes'))
app.use('/carreras', require('./routes/carreras.routes'))
app.use('/materias', require('./routes/materias.routes'))
app.use('/anuncios', require('./routes/anuncios.routes'))

// Settings
app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
  console.log(`Servidor corriendo en puerto ${app.get('port')}`)
})
