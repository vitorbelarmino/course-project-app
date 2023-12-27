import { api } from '@/api'
import { setCookie, getCookie, deleteCookie } from 'cookies-next'

export class Cookies {
  static set (token: string) {
    setCookie('course.token', token, {
      expires: new Date(Date.now() + 86400000),
      path: '/'
    })
    api.defaults.headers.Authorization = `Bearer ${token}`
  }

  static get () {
    return getCookie('course.token')
  }

  static delete () {
    deleteCookie('course.token')
    api.defaults.headers.Authorization = ''
  }
}
