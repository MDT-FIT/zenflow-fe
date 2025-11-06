import { useRefreshMutation } from '../service/useRefreshMutation'
import { useLogOutMutation } from '../service/useLogOutMutation'
import { useLogInMutation } from '../service/useLogInMutation'
import { AuthContext } from './AuthContext'
import { useGetCurrentUser, USER_KEY } from '../service/useGetCurrentUser'
import { queryClient } from '@/App'
import { useNavigate } from 'react-router-dom'

export interface AuthContextProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthContextProviderProps) => {
  const { data: user, isLoading: isUserLoading } = useGetCurrentUser({ enabled: true })
  const navigate = useNavigate()

  const logoutMutation = useLogOutMutation({
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: [USER_KEY] })
    },
  })

  const refreshMutation = useRefreshMutation({})

  const loginMutation = useLogInMutation({
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USER_KEY] })
      navigate('/', { replace: true })
    },
  })

  const value = {
    user: user ?? null,
    login: loginMutation.mutateAsync,
    logout: logoutMutation.mutateAsync,
    isUserLoading,
    isLoginIn: loginMutation.isPending,
    isLogingOut: logoutMutation.isPending,
    refresh: refreshMutation.mutateAsync,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
