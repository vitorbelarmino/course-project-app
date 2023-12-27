'use client'
import { Claim } from '@/api/userApi'
import { IUser } from '@/interface/IUser'
import { createContext, useContext, useEffect, useState } from 'react'

type AuthContextType = {
  user: IUser | undefined
  claim: () => void
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
  useEffect(() => {
    claim()
  }, [])
  return (
    <AuthContext.Provider value={{ user, claim }}>
      {children}
    </AuthContext.Provider>
  )
}
