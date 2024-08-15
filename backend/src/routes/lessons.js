import { Router } from 'express'
import { readJSON } from '../utils.js'
import { validatePartialLesson } from '../schemas/lesson.js'

export const lessonsRouter = Router()

lessonsRouter.get('/:from-:to', (req, res) => {
  const lessons = readJSON('../../lessons.json') // !ERROR¡
  const wantedLessons = lessons.slice(req.params.from - 1, req.params.to - 1)
  res.json(wantedLessons)
})

lessonsRouter.patch('/:id', (req, res) => {
  const validationResult = validatePartialLesson(req.body)
  if (!validationResult.success) {
    return res.status(400).json({ json: JSON.parse(validationResult.error.message) })
  }
  const { state } = validationResult.data
  const { id } = req.params
  const lessons = readJSON('../../lessons.json') // !ERROR¡
  if (id === -1) return res.status(400).json({ message: 'Id is invalid' })
  const lesson = lessons[id - 1]
  lesson.state = state

  res.status(202).json({ modifyLesson: lesson })
})
