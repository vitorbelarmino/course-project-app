'use client'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Auth } from '@/context/AuthContext'
import CoursesList from './components/CourseList'
export default function Home () {
  const { claim } = Auth()
  useEffect(() => {
    claim()
  }, [])
  return (
    <div>
      <Header />
      <CoursesList />
    </div>
  )
}
