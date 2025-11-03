import { BankService } from './BankService'
import { Balance } from '../models/Balance'
import { useQuery } from '@tanstack/react-query'

export const useListBalanceQuery = ({
  accountIds,
  userId,
  onSuccess,
  onError,
}: {
  accountIds: string[]
  userId: string
  onSuccess?: (data: Balance) => void
  onError?: (error: unknown) => void
}) => {
  return useQuery({
    enabled: !!accountIds.length && !!userId,
    queryKey: ['balances', { accountIds, userId }],
    queryFn: async () => {
      try {
        const balances = await BankService.getApiBankBalances(accountIds, userId)
        return balances.map(balance => Balance.create(balance));
      } catch (error) {
        throw new Error(`Failed to fetch balance: ${error}`)
      }
    },
  })
}
