'use client'
import { FaRegUser } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'
import { FiLock } from 'react-icons/fi'
import { ILogin } from '@/interface/IUser'
import { ChangeEvent, useState } from 'react'
import { loginSchema } from '@/schemas/loginSchemas'
import { login } from '@/api/userApi'
import { Cookies } from '@/utils/cookies'

export default function LoginPage () {
  const [loginInfo, setLoginInfo] = useState({} as ILogin)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setLoginInfo({ ...loginInfo, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error } = loginSchema.validate(loginInfo)
    if (!error) {
      const token = await login(loginInfo.email, loginInfo.password)

      if (token) {
        Cookies.set(token)
        setLoginInfo({
          email: '',
          password: ''
        })
      }
    } else {
      // error message from joi
      alert(error.message)
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-black px-7 py-9 gap-4 rounded">
        <form onSubmit={handleSubmit} className='flex flex-col  justify-center items-center gap-3'>
          <p className="border p-2 mb-4 border-black rounded-full">
            <FaRegUser size="30"/>
          </p>
          <div className='flex items-center gap-2 border-b-2 border-gray-400 '>
            <MdOutlineEmail size="22" />
            <input type="text" placeholder='E-mail' name="email" value={loginInfo.email} onChange={handleChange} className="p-1 focus:outline-none w-full"/>
          </div>

          <div className='flex items-center gap-2 border-b-2 border-gray-400 '>
            <FiLock size="22" />
            <input type="text" name="password" placeholder='Senha' value={loginInfo.password} onChange={handleChange} className="p-1 focus:outline-none w-full"/>
          </div>

          <button type="submit" className='bg-slate-400 w-full py-1 rounded'>
          Entrar
          </button>
        </form>
        <div className='flex gap-1 pt-2'>
          <p className='text-sm'>Não possui uma conta? </p>
          <a href="/register" className='text-sm text-blue-700'>Crie agora</a>
        </div>
      </div>
    </div>
  )
}
