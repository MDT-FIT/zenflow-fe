import { useMutation } from '@tanstack/react-query'
import { AuthService } from './AuthService'
import type { LogInFormValues } from '../models/LogInFormValues'
import type { LogInResponse } from '@/api/dto/LogInResponse'
import type { User } from '../models/User'

export const useLogInMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}) => {
  return useMutation({
    mutationFn: async (data: LogInFormValues) => {
      try {
        const response = await AuthService.postApiZenflowAuthLogIn(data)

        const mappedResponse: LogInResponse = {
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
          user: {
            email: response.user.email,
            id: response.user.id,
            username: response.user.username,
            accountIds: response.user.accountIds
          } as User,
        }

        if (!mappedResponse.user) {
          throw new Error('No user data returned from the server')
        }

        return mappedResponse.user
      } catch (error) {
        throw new Error(`Log in failed: ${error}`)
      }
    },
    onSuccess,
    onError,
  })
}
