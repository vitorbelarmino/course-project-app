import { api } from '.'
import { AxiosError } from 'axios'

export async function login (email: string, password: string): Promise<string> {
  try {
    const { data } = await api.post('/login', { email, password })
    console.log(data)

    return data.token
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response?.status === 401) {
        return 'Email ou senha inválidos'
      }
    }
    return 'Error interno no servidor, aguarde alguns instantes e tente novamente'
  }
}
