import { useMutation } from '@tanstack/react-query'
import { AuthService } from './AuthService'
import { Exception } from '@/features/utils/Exception'

export const useRefreshMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}) => {
  return useMutation({
    mutationFn: async () => {
      try {
        await AuthService.postApiZenflowAuthRefresh()
      } catch (error) {
        if (error instanceof Error) {
          throw new Exception({
            title: 'Failed to refresh the user failed:',
            message: error.message,
            level: 'error',
          })
        }
      }
    },
    onSuccess,
    onError,
  })
}
