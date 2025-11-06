import { createContext } from 'react'
import type { User } from '../models/User'
import type { LogInFormValues } from '../models/LogInFormValues'

export interface AuthContextReturnType {
  user: User | null
  login: (data: LogInFormValues) => Promise<User>
  logout: () => Promise<void>
  isLoginIn: boolean
  isLogingOut: boolean
  isUserLoading: boolean
  refresh: () => Promise<void>
}

export const AuthContext = createContext<AuthContextReturnType | null>(null)
