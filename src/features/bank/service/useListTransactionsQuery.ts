import { BankService } from './BankService'
import { useQuery } from '@tanstack/react-query'
import type { TransactionFilter } from '@/api'
import { Transaction } from '../models/Transaction'
import { mapTransactionType } from '../models/TransactionType'

export const useListTransactionsQuery = ({
  filter,
  onSuccess,
  onError,
}: {
  filter: TransactionFilter
  onSuccess?: (data: Transaction[]) => void
  onError?: (error: unknown) => void
}) => {
  return useQuery({
    enabled: !!filter.accountIds.length && !!filter.userId,
    queryKey: ['transactions', { accountIds: filter.accountIds, userId: filter.userId }],
    queryFn: async () => {
      try {
        const transactions = await BankService.postApiBankTransactions(filter)

        const mappedTransactions = transactions.map((tx) =>
          Transaction.create({
            ...transactions,
            type: mapTransactionType[tx.type],
          })
        )

        return mappedTransactions
      } catch (error) {
        throw new Error(`Failed to fetch transactions: ${error}`)
      }
    },
  })
}
