import { courseContext } from '@/context/CourseContext'
import { useRouter } from 'next/navigation'

export default function CoursesList () {
  const { courses, titule } = courseContext()
  const router = useRouter()
  const handleCourse = (id: string) => {
    router.push(`/course/${id}`)
  }
  return (
    <div className='py-5'>
      <h1 className='my-3 ml-3 text-xl'>{titule}</h1>
      <div className='grid grid-cols-3 lg:grid-cols-5 md:grid-cols-4 h- '>
        {courses?.map((course) => (
          <div key={course.id} className='flex flex-col border border-gray-500 rounded-md m-2 p-2 gap-1 cursor-pointer' onClick={() => handleCourse(course.id)}>
            <img src={course.thumbnail} alt={course.name} className='h-56 border-2 rounded-md mb-2 '/>
            <p className='text-black text-base'>{course.name}</p>
            <p className='text-xs'>{course.teacher.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
