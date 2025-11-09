import { useAuth } from '@/features/auth/context/useAuth'
import { useListTransactionsQuery } from '@/features/bank/service/useListTransactionsQuery'
import { useSearchParamsFilters } from '@/features/utils/useSearchParamsFilters'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchBar } from '../dashboard/components/SearchBar'
import { TransactionTable } from '../dashboard/components/TransactionTable'

export const Transactions = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [currentAccount] = useState(user?.accountIds[0] ?? '')
  const { getFilter, setFilters } = useSearchParamsFilters()

  useEffect(() => {
    if (!user?.accountIds || user?.accountIds?.length === 0 || !currentAccount) {
      navigate('/connect-bank')
    }
  }, [user])

  const handleSetSearch = (query: string) => setFilters({ query: query ?? '' })

  const queryAccount = getFilter('query')
  const { data: transactions } = useListTransactionsQuery({
    filter: {
      accountIds: [queryAccount ? `tink-${queryAccount}` : currentAccount].filter((id) =>
        Boolean(id)
      ),
      userId: user?.id || '',
    },
  })

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex gap-3  w-full">
        <SearchBar value={getFilter('query')} onChange={handleSetSearch} />
      </div>

      {transactions && <TransactionTable data={transactions} pageSize={16} />}
    </div>
  )
}
