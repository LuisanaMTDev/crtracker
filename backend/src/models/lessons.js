import { createClient } from '@libsql/client'
import { env } from 'node:process'

const turso = createClient({
  url: env.TURSO_DATABASE_URL,
  authToken: env.TURSO_AUTH_TOKEN
})

export class LessonsModel {
  static async getFromTo ({ from, to }) {
    const lessons = await turso.execute({
      sql: 'SELECT id, title, state FROM lessons WHERE id >= ? AND id <= ?',
      args: [from, to]
    })
    return lessons.rows
  }

  static async setNewState ({ id, newState }) {
    await turso.execute({ // TODO: Change this to a transaction.
      sql: 'UPDATE lessons SET state = ? WHERE id = ?',
      args: [newState, id]
    })

    const lesson = await turso.execute({
      sql: 'SELECT * FROM lessons WHERE id = ?',
      args: [id]
    })

    return lesson.rows
  }
}
