'use client'
import { Claim } from '@/api/userApi'
import { IUser } from '@/interface/IUser'
import { Cookies } from '@/utils/cookies'
import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  user: IUser | undefined
  claim: () => void
  logout: () => void
}

export const AuthContext = createContext({} as AuthContextType)

export const Auth = () => useContext(AuthContext)

export default function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<IUser | undefined>(undefined)
  const claim = () => {
    Claim().then((user) => {
      if (!user) return
      setUser(user)
    }).catch((error) => {
      console.error(error)
    })
  }
  const logout = () => {
    Cookies.delete()
    window.location.reload()
  }
  useEffect(() => {
    claim()
  }, [])
  return (
    <AuthContext.Provider value={{ user, claim, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
