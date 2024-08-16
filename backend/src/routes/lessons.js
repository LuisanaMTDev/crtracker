import { Router } from 'express'

import { LessonsController } from '../controllers/lessons.js'

export const lessonsRouter = Router()

lessonsRouter.get('/:from-:to', LessonsController.getFromTo)
lessonsRouter.patch('/:id', LessonsController.setNewState)
