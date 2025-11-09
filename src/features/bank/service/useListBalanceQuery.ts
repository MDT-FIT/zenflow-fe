import { BankService } from './BankService'
import { useQuery } from '@tanstack/react-query'
import { Exception } from '@/features/utils/Exception'
import type { Balance } from '../models/Balance'
import { BalanceMapper } from '../mappers/BalanceMapper'

const LIST_BALANCE_QUERY_KEY = 'list-balance'

export const useListBalanceQuery = ({
  accountIds,
  userId,
}: {
  accountIds: string[]
  userId: string
}) => {
  return useQuery<Balance[], Exception>({
    enabled: !!accountIds.length && !!userId,
    queryKey: [LIST_BALANCE_QUERY_KEY, { accountIds, userId }],
    queryFn: async () => {
      try {
        const response = await BankService.getApiBankBalances(accountIds, userId)

        const balances = response ?? []

        return balances.map((balance) => BalanceMapper.toDomain(balance))
      } catch (error) {
        throw new Exception({ title: 'Failed to fetch balance', message: `${error}` })
      }
    },
  })
}
