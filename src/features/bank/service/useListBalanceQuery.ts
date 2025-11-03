import { BankService } from './BankService'
import { useQuery } from '@tanstack/react-query'
import type { BalanceDto } from '@/api/dto/BalanceDto'
import { Exception } from '@/features/utils/Exception'

const LIST_BALANCE_QUERY_KEY = 'list-balance';

export const useListBalanceQuery = ({
  accountIds,
  userId,
}: {
  accountIds: string[]
  userId: string
}) => {
  return useQuery<BalanceDto[], Exception>({
    enabled: !!accountIds.length && !!userId,
    queryKey: [LIST_BALANCE_QUERY_KEY, { accountIds, userId }],
    queryFn: async () => {
      try {
        const balances = await BankService.getApiBankBalances(accountIds, userId)
        
        return balances ?? [];
      } catch (error) {
         throw new Exception({ title: 'Failed to fetch balance', message: `${error}` });
      }
    },
  })
}
