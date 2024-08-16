import z from 'zod'

const lessonSchema = z.object({
  title: z.string(),
  state: z.number({ invalid_type_error: 'The state must be a integer and positive.', required_error: 'The state is required.' }).int().min(0).max(2)
})

export const validatePartialLesson = (reqBody) => {
  return lessonSchema.partial().safeParse(reqBody)
}
