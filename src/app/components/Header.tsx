'use client'
import { IoSearchSharp } from 'react-icons/io5'
import { FaRegUser } from 'react-icons/fa'
import { Dropdown } from './Dropdown'
import { getCategories } from '@/api/categoryApi'
import { useEffect, useState } from 'react'
import { ICategory } from '@/interface/ICategory'
import { Auth } from '@/context/AuthContext'

const perfilOptions = [
  { name: 'Perfil' },
  { name: 'Meus cursos' },
  { name: 'Configurações' },
  { name: 'Sair' }
]

export function Header () {
  const [categories, setCategories] = useState<ICategory[] | undefined>(undefined)
  const { user } = Auth()

  useEffect(() => {
    getCategories().then((categories) => {
      if (!categories) return
      setCategories(categories)
    })
  }, [])
  return (
    <div className="flex items-center justify-between border shadow-lg py-3 px-3 ">
      <div className="flex items-center justify-between px-2 gap-6">
        <h1>Cursos</h1>
        <Dropdown options={categories} >
          <p className='cursor-pointer'>Categorias</p>
        </Dropdown>
        <div className="flex items-center gap-3 border border-black rounded-full px-2 py-1">
          <IoSearchSharp className="cursor-pointer" />
          <input type="text" className='focus:outline-none bg-transparent h-full' />
        </div>
      </div>
      <div className='flex items-center gap-2'>
        {
          user ? <p className='text-sm'>{user.name}</p> : <p className='text-sm'>Entrar</p>
        }
        <Dropdown perfil options={perfilOptions}>
          <div className='border p-2 border-black rounded-full cursor-pointer'>
            <FaRegUser size="20"/>
          </div>

        </Dropdown>
      </div>
    </div>
  )
}
