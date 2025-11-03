import { useContext } from 'react'
import { AuthContext, type AuthContextReturnType } from './AuthContext'

export const useAuth = (): AuthContextReturnType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
