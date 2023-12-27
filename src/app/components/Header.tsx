'use client'
import { IoSearchSharp } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { Dropdown } from './Dropdown'
import { getCategories } from '@/api/categoryApi'
import { useEffect, useState } from 'react'
import { ICategory } from '@/interface/ICategory'
import { Auth } from '@/context/AuthContext'
import { courseContext } from '@/context/CourseContext'

// const perfilOptions = [
//   { name: 'Perfil' },
//   { name: 'Meus cursos' },
//   { name: 'Configurações' },
//   { name: 'Sair' }
// ]

export function Header () {
  const [categories, setCategories] = useState<ICategory[] | undefined>(undefined)
  const [search, setSearch] = useState<string>('')
  const { user } = Auth()
  const { filterCoursesByCategory, filterCoursesBySearch, resetFilter } = courseContext()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (search.length === 0) return
    e.preventDefault()
    filterCoursesBySearch(search)
  }

  useEffect(() => {
    getCategories().then((categories) => {
      if (!categories) return
      setCategories(categories)
    })
  }, [])
  return (
    <div className="flex items-center justify-between border shadow-lg py-3 px-3 ">
      <div className="flex items-center justify-between px-2 gap-6">
        <h1 onClick={resetFilter} className='cursor-pointer'>Cursos</h1>
        <Dropdown options={categories} handleSelect={filterCoursesByCategory}>
          <p className='cursor-pointer'>Categorias</p>
        </Dropdown>
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-3 border border-black rounded-full px-2 py-1">
            <IoSearchSharp className={`${search.length === 0 ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={handleSubmit}/>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className='focus:outline-none bg-transparent h-full' />
          </div>
        </form>
      </div>
      <div className='flex items-center gap-2'>
        {
          user ? <p className='text-sm'>{user.name}</p> : <p className='text-sm'>Entrar</p>
        }
        <div className='border p-2 border-black rounded-full'>
          <FaRegUser size="20"/>
        </div>
        <p className='text-sm font-semibold py-1 px-2 border rounded-md bg-red-600 text-white cursor-pointer'>sair</p>
      </div>
    </div>
  )
}
