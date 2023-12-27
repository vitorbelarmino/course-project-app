export enum LessonType {
  Video = 'video',
  text = 'text',
}

export interface ILesson {
  id: string;
  name: string;
  type: LessonType;
  content: string;
  urlVideo: string;
  courseId: string;
}
