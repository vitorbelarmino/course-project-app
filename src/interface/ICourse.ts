import { ILesson } from './ILesson'
import { ITeacher } from './ITeacher'

export interface ICourse {
  id: string
  name: string
  description: string
  thumbnail: string
  teacher: ITeacher
  lessons: ILesson[]
  teacherId: string
  categoryId: string
}
