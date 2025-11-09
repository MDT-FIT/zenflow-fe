import { BankService } from './BankService'
import type { StatsFilterRequest } from '@/api/dto/request/StatsFilterRequest'
import type { StatsDto } from '../../../api/dto/StatsDto'
import { useQuery } from '@tanstack/react-query'
import { Exception } from '@/features/utils/Exception'

const GET_INCOME_QUERY_KEY = 'stats-income'

export const useGetIncomeQuery = ({ filter }: { filter: StatsFilterRequest }) => {
  return useQuery<StatsDto, Exception>({
    enabled: !!filter.accountIds.length && !!filter.userId,
    queryKey: [GET_INCOME_QUERY_KEY, filter],
    queryFn: async () => {
      try {
        const income = await BankService.postApiBankStatsIncome(filter)

        return income
      } catch (error) {
        throw new Exception({ title: 'Failed to fetch stats', message: `${error}` })
      }
    },
  })
}
