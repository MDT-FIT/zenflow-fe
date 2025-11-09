import { BankService } from './BankService'
import type { StatsFilterRequest } from '@/api/dto/request/StatsFilterRequest'
import { useQuery } from '@tanstack/react-query'
import { Exception } from '@/features/utils/Exception'
import type { StatsDto } from '@/api/dto/StatsDto'

const GET_EXPENSES_QUERY_KEY = 'stats-expenses'

export const useGetExpensesQuery = ({ filter }: { filter: StatsFilterRequest }) => {
  return useQuery<StatsDto, Exception>({
    enabled: !!filter.accountIds.length && !!filter.userId,
    queryKey: [GET_EXPENSES_QUERY_KEY, filter],
    queryFn: async () => {
      try {
        const expenses = await BankService.postApiBankStatsExpenses(filter)

        return expenses
      } catch (error) {
        throw new Exception({ title: 'Failed to fetch stats', message: `${error}` })
      }
    },
  })
}
