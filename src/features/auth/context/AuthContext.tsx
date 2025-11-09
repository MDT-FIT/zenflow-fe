import { createContext } from 'react'
import type { User } from '../models/User'
import type { LogInFormValues } from '../models/LogInFormValues'
import type { SignUpFormValues } from '../models/SignUpFormValues'

export interface AuthContextReturnType {
  user: User | null
  login: (data: LogInFormValues) => Promise<User | undefined>
  signup: (data: SignUpFormValues) => Promise<User | undefined>
  logout: () => Promise<void>
  isLoginIn: boolean
  isSignUp: boolean
  isLogingOut: boolean
  isUserLoading: boolean
  refresh: () => Promise<void>
}

export const AuthContext = createContext<AuthContextReturnType | null>(null)
