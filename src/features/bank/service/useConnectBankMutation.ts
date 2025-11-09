import { useMutation } from '@tanstack/react-query'
import { Exception } from '@/features/utils/Exception'
import { BankService } from './BankService'
import type { ConnectBankRequest } from '@/api/dto/request/ConnectBankRequest'

export const useConnectBankMutation = ({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void
  onError?: (error: any) => void
}) => {
  return useMutation({
    mutationFn: async ({ userId }: ConnectBankRequest) => {
      try {
        await BankService.postApiBankConnectOtherBank(userId)
      } catch (error) {
        if (error instanceof Error) {
          throw new Exception({
            title: 'Failed to connect bank via Tink',
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
