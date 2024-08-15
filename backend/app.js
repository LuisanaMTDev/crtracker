import express from 'express'
import { lessonsRouter } from './src/routes/lessons.js'

const PORT = process.env.PORT ?? 8080

const app = express()

app.disable('x-powered-by') // Deshabilitar el header X-Powered-By
app.use(express.json()) // Aplicando middleware

app.get('/', (req, res) => {
  res.send('<h1>Helloooo!</h1>')
})

app.use('/lessons', lessonsRouter) // Separar las rutas con express.Router()

app.use((req, res) => { // Agregar un 404 para una ruta no existente,
  res.status(404).send('404')
})

app.listen(PORT, () => { // Escuchando el puerto
  console.log(`server listening on port http://localhost:${PORT}`)
})
