'use client'
import { getCourses } from '@/api/courseApi'
import { ICourse } from '@/interface/ICourse'
import { formatString } from '@/utils/formatString'
import { useRouter } from 'next/navigation'
import { createContext, useContext, useEffect, useState } from 'react'

type CourseContextType = {
  courses: ICourse[] | undefined
  titule: string
  filterCoursesByCategory: (categoryId: string, CategoryName: string) => void
  filterCoursesBySearch: (search: string,) => void
  findCourseById: (id: string) => ICourse | undefined
  resetFilter: () => void
}

const CourseContext = createContext({} as CourseContextType)

export const courseContext = () => useContext(CourseContext)

export default function CourseProvider ({ children }: { children: React.ReactNode }) {
  const [allCourses, setAllCourses] = useState<ICourse[] | undefined>(undefined)
  const [courses, setCourses] = useState<ICourse[] | undefined>(undefined)
  const [titule, setTitule] = useState<string>('Todos os cursos')
  const router = useRouter()

  const filterCoursesByCategory = (categoryId: string, CategoryName: string) => {
    setCourses(allCourses?.filter((course) => course.categoryId === categoryId))
    setTitule(`Cursos de ${CategoryName}`)
    router.push('/')
  }

  const filterCoursesBySearch = (search: string) => {
    const getCourses = allCourses?.filter((course) => formatString(course.name).includes(formatString(search)))
    router.push('/')
    if (getCourses?.length !== 0) {
      setCourses(getCourses)
      setTitule(`Resultados de "${search}"`)
    } else {
      setCourses(undefined)
      setTitule(`Não encontramos nenhum resultado para: "${search}"`)
    }
  }

  const findCourseById = (id: string) => {
    const este = allCourses?.find((course) => course.id === id)
    return este
  }

  const resetFilter = () => {
    router.push('/')
    setCourses(allCourses)
    setTitule('Todos os cursos')
  }

  useEffect(() => {
    getCourses().then((courses) => {
      if (!courses) {
        return
      }
      setAllCourses(courses)
      setCourses(courses)
    })
  }, [])

  const values = {
    courses,
    titule,
    filterCoursesByCategory,
    filterCoursesBySearch,
    findCourseById,
    resetFilter
  }
  return (
    <CourseContext.Provider value={{ ...values }}>
      {children}
    </CourseContext.Provider>
  )
}
