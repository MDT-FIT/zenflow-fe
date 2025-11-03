import { BankService } from './BankService'
import { Balance } from '../models/Balance'
import { useQuery } from '@tanstack/react-query'
import { BankConfig } from '../models/BankConfig'

export const useListBankConfigsQuery = ({
  userId,
  onSuccess,
  onError,
}: {
  accountIds: string[]
  userId: string
  onSuccess?: (data: BankConfig[]) => void
  onError?: (error: unknown) => void
}) => {
  return useQuery({
    enabled: !!userId,
    queryKey: ['configs', { userId }],
    queryFn: async () => {
      try {
        const configs = await BankService.getApiBankBankConfigs(userId)
        return configs.map(config => BankConfig.create(config));
      } catch (error) {
        throw new Error(`Failed to fetch bank configs: ${error}`)
      }
    },
  })
}
