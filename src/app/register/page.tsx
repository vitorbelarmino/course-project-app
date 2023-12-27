'use client'
import { register } from '@/api/userApi'
import { IRegister } from '@/interface/IUser'
import { registerSchema } from '@/schemas/registerSchema'
import { Cookies } from '@/utils/cookies'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { FaRegUser } from 'react-icons/fa'
import { FiLock } from 'react-icons/fi'
import { MdOutlineEmail } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'

export default function RegisterPage () {
  const [registerInfo, setRegisterInfo] = useState({} as IRegister)
  const [isLoading, setIsLoading] = useState(false)
  const route = useRouter()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegisterInfo({ ...registerInfo, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { error } = registerSchema.validate(registerInfo)
    if (!error) {
      setIsLoading(true)
      const token = await register(registerInfo)
      if (!token) {
        setIsLoading(false)
        return
      }

      Cookies.set(token)
      setRegisterInfo({
        name: '',
        email: '',
        password: ''
      } as IRegister)
      setIsLoading(false)
      route.push('/')
    } else {
      setIsLoading(false)
      toast.error(error.message)
    }
  }
  return (
    <div className=" flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="flex flex-col border justify-center border-black rounded p-4 gap-3">
        <div className='flex justify-center'>
          <div className='border p-2 mb-4 border-black rounded-full'>
            <FaRegUser size="30"/>
          </div>
        </div>
        <div className='flex items-center gap-2 border-b-2 border-gray-400  '>
          <FaRegUser size="22" />
          <input type="text" name='name' placeholder='Nome' value={registerInfo.name} onChange={handleChange} className="p-1 focus:outline-none w-full"/>
        </div>
        <div className='flex items-center gap-2 border-b-2 border-gray-400  '>
          <MdOutlineEmail size="22" />
          <input type="text" name='email' placeholder='E-mail' value={registerInfo.email} onChange={handleChange} className="p-1 focus:outline-none w-full"/>
        </div>

        <div className='flex items-center gap-2 border-b-2 border-gray-400 '>
          <FiLock size="22" />
          <input type="text" name='password' placeholder='Senha' value={registerInfo.password} onChange={handleChange} className="p-1 focus:outline-none w-full"/>
        </div>

        <button type='submit' disabled={isLoading} className='bg-slate-400 w-full py-1 rounded'>{
          isLoading ? <ClipLoader color='#fff' size={20} /> : 'Cadastrar'
        }
        </button>
      </form>
    </div>
  )
}
