import { useMutation } from '@tanstack/react-query'
import { AuthService } from './AuthService'
import type { LogInResponse } from '@/api/dto/response/LogInResponse'
import type { User } from '../models/User'
import { Exception } from '@/features/utils/Exception'
import type { SignUpFormValues } from '../models/SignUpFormValues'

export const useSignInMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}) => {
  return useMutation({
    mutationFn: async (data: SignUpFormValues) => {
      try {
        const response = await AuthService.postApiZenflowAuthSignUp(data)

        const mappedResponse: LogInResponse = {
          accessToken: response.access_token,
          refreshToken: response.refresh_token,
          user: {
            email: response.user.email,
            id: response.user.id,
            username: response.user.username,
            accountIds: response.user.accountIds,
          } as User,
        }

        if (!mappedResponse.user) {
          throw new Error('No user data returned from the server')
        }

        return mappedResponse.user
      } catch (error) {
        if (error instanceof Error) {
          throw new Exception({ title: 'Sign up failed', message: error.message, level: 'error' })
        }
      }
    },
    onSuccess,
    onError,
  })
}
