import { useMutation } from '@tanstack/react-query'
import { AuthService } from './AuthService'

export const useRefreshMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}) => {
  return useMutation({
    mutationFn: async (data: string) => {
      try {
        await AuthService.postApiZenflowAuthRefresh(data)
      } catch (error) {
        throw new Error(`Failed to refresh the user failed: ${error}`)
      }
    },
    onSuccess,
    onError,
  })
}
