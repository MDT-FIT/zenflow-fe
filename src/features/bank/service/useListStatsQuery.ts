import { BankService } from './BankService'
import type { StatsFilter } from '@/api/dto/StatsFilter'
import { Stats } from '../models/Stats'
import { useQuery } from '@tanstack/react-query'

export const useListStatsQuery = ({
  filter,
  onSuccess,
  onError,
}: {
  filter: StatsFilter
  onSuccess?: (data: Stats) => void
  onError?: (error: unknown) => void
}) => {
  return useQuery({
    enabled: !!filter.accountIds.length && !!filter.userId,
    queryKey: ['stats', { accountIds: filter.accountIds, userId: filter.userId }],
    queryFn: async () => {
      try {
        const expenses = await BankService.postApiBankStatsExpenses(filter)
        const income = await BankService.postApiBankStatsIncome(filter)

        return {
          expenses: Stats.create(expenses),
          income: Stats.create(income),
        }
      } catch (error) {
        throw new Error(`Failed to get stats: ${error}`)
      }
    },
  })
}
