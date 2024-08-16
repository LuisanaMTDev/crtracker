import express from 'express'
import { lessonsRouter } from './src/routes/lessons.js'
import cors from 'cors'

const PORT = process.env.PORT ?? 8080

const app = express()

app.disable('x-powered-by') // Deshabilitar el header X-Powered-By
// Aplicando middlewares
app.use(express.json())
app.use(cors())

app.use('/lessons', lessonsRouter) // Separar las rutas con express.Router()

app.use((req, res) => { // Agregar un 404 para una ruta no existente,
  res.status(404).send('This route doesn\'t exist.')
})

app.listen(PORT, () => { // Escuchando el puerto
  console.log(`server listening on port http://localhost:${PORT}`)
})
