import { BankService } from './BankService'
import { useQuery } from '@tanstack/react-query'
import type { TransactionFilter } from '@/api'
import { Transaction } from '../models/Transaction'
import { Exception } from '@/features/utils/Exception'
import { TransactionMapper } from '../mappers/TransactionMapper'

const LIST_TRANSACTIONS_QUERY_KEY = 'list-transactions'
export const useListTransactionsQuery = ({ filter }: { filter: TransactionFilter }) => {
  return useQuery<Transaction[], Exception>({
    enabled: !!filter && !!filter.userId,
    queryKey: [LIST_TRANSACTIONS_QUERY_KEY, { ...filter }],
    queryFn: async () => {
      try {
        console.log('get transaction')
        const transactions = await BankService.postApiBankTransactions(filter)

        return transactions.map(TransactionMapper.toDomain)
      } catch (error) {
        throw new Exception({ title: 'Failed to fetch transactions', message: `${error}` })
      }
    },
  })
}
