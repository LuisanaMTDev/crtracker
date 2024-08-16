import { LessonsModel } from '../models/lessons.js'
import { validatePartialLesson } from '../schemas/lesson.js'

export class LessonsController {
  static async getFromTo (req, res) {
    if (req.params.from > req.params.to) return res.status(404).json({ message: 'from param is greater then to param.' })
    const lessons = await LessonsModel.getFromTo({
      from: req.params.from,
      to: req.params.to
    })
    res.json(lessons)
  }

  static async setNewState (req, res) {
    // Controller validations:
    if (req.params.id === '-1') return res.status(400).json({ message: 'Id is invalid' })
    const validationResult = validatePartialLesson(req.body)
    if (!validationResult.success) {
      return res.status(400).json({ json: JSON.parse(validationResult.error.message) })
    }
    // Controller validations, end.

    const { state } = validationResult.data
    const { id } = req.params
    const lesson = await LessonsModel.setNewState({ id, newState: state })
    res.status(202).json({ modifyLesson: lesson })
  }
}
