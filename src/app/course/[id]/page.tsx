'use client'
import { Header } from '@/app/components/Header'
import { courseContext } from '@/context/CourseContext'
import { ICourse } from '@/interface/ICourse'
import { ILesson, LessonType } from '@/interface/ILesson'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'

export default function CoursePage ({ params } : {params: {id: string}}) {
  const [course, setCourse] = useState<ICourse | undefined>(undefined)
  const [lessonCurrent, setLessonCurrent] = useState<ILesson | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(false)
  const { courses } = courseContext()

  const getCurse = () => {
    const courseFiltered = courses?.find((course) => course.id === params.id)
    if (!courseFiltered) return
    setCourse(courseFiltered)
    setLessonCurrent(courseFiltered.lessons[0])
  }

  const handleLesson = (lessonId: string) => {
    const lesson = course?.lessons.find((lesson) => lesson.id === lessonId)
    if (!lesson) return
    setLoading(true)
    setLessonCurrent(lesson)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  useEffect(() => {
    getCurse()
  }, [courses])
  return (
    <div>
      <Header />
      <div className='flex flex-col h-screen border lg:flex-row'>

        <div className='h-2/4 lg:w-4/5 lg:h-4/5 pl-2'>
          {
            loading
              ? <div className='flex justify-center items-center h-screen '>
                <ClipLoader size={40}/>
              </div>
              : lessonCurrent?.type === LessonType.text
                ? (
                  <div className='w-full h-full'>
                    <h1 className='text-2xl'>{lessonCurrent?.name}</h1>
                    <p className='w-full h-full'>{lessonCurrent?.content}</p>
                  </div>
                )
                : (
                  <>
                    <iframe src={'https://www.youtube.com/embed/hdex1hj1dmk?si=DeG9R0V326KJlGZy'} className='w-full h-full' />
                    <div className='pl-2 pt-2'>
                      <p className='text-2xl'>
                        {lessonCurrent?.name}
                      </p>
                      <p className='text-sm'>{lessonCurrent?.content}</p>
                    </div>
                  </>
                )
          }
        </div>
        <div className='border-[1px] h-full' />
        <ul>
          {course?.lessons.map((lesson, index) => (
            <div onClick={() => { handleLesson(lesson.id) }} className={`flex gap-1 py-2 px-2 border-b cursor-pointer ${lessonCurrent?.id === lesson.id && 'bg-slate-300'}`}>
              <p>{`${index + 1}- `}</p>
              <li key={lesson.id}>{lesson.name}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}
