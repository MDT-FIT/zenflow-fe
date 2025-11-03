import { useMutation } from '@tanstack/react-query'
import { AuthService } from './AuthService'

export const useLogOutMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}) => {
  return useMutation({
    mutationFn: async () => {
      try {
        await AuthService.postApiZenflowAuthLogOut()
      } catch (error) {
        throw new Error(`Log out failed: ${error}`)
      }
    },
    onSuccess,
    onError,
  })
}
