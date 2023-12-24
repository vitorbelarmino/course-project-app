import { IRegister } from '@/interface/IUser'
import { api } from '.'
import { AxiosError } from 'axios'

export async function login (email: string, password: string): Promise<string | undefined> {
  try {
    const { data } = await api.post('/login', { email, password })
    return data.token
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401 || error.response?.status === 404) {
        alert('Email ou senha inválidos')
        return
      }
    }
    alert('Error interno no servidor, aguarde alguns instantes e tente novamente')
  }
}

export async function register (registerInfo: IRegister): Promise<string | undefined> {
  const { name, email, password } = registerInfo
  try {
    const { data } = await api.post('/register', { name, email, password })
    return data.token
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 409) {
        alert('Email já cadastrado')
        return
      }
    }
    alert('Error interno no servidor, aguarde alguns instantes e tente novamente')
  }
}
