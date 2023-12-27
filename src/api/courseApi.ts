import { ICourse } from '@/interface/ICourse'
import { api } from '.'

export async function getCourses (): Promise<ICourse[] | undefined> {
  try {
    const courses = await api.get('/courses')
    return courses.data
  } catch (error) {
    console.error(error)
  }
}
