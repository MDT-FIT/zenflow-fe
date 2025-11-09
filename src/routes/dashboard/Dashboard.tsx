import { useAuth } from '@/features/auth/context/useAuth'
import { useGetExpensesQuery } from '@/features/bank/service/useGetExpensesQuery'
import { useGetIncomeQuery } from '@/features/bank/service/useGetIncomeQuery'
import { useListBalanceQuery } from '@/features/bank/service/useListBalanceQuery'
import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TransactionTable } from './components/TransactionTable'
import { RangeDateSelector } from './components/RangeDateSelector'
import { useSearchParamsFilters } from '@/features/utils/useSearchParamsFilters'
import type { DateRange } from 'react-day-picker'
import { SearchBar } from './components/SearchBar'
import { Button } from '@/components/ui/button'
import { ExpensesCard } from './components/ExpensesCard'
import { IncomeCard } from './components/IncomeCard'
import { Card } from '../cards/Card'
import { ChartTransaction } from './components/ChartTransaction'
import { useListTransactionsQuery } from '@/features/bank/service/useListTransactionsQuery'

const CURRENT_DATE = new Date()

export const Dashboard = () => {
  const { user, isUserLoading } = useAuth()
  const navigate = useNavigate()
  const [currentAccount, selectedAccount] = useState(user?.accountIds[0] ?? '')
  const { getFilter, setFilters } = useSearchParamsFilters()

  useEffect(() => {
    if ((!user?.accountIds || user?.accountIds?.length === 0 || !currentAccount) && !isUserLoading) {
      navigate('/connect-bank')
    }
  }, [user])

  const selectNextAccount = () => {
    if (user?.accountIds && user?.accountIds.length) {
      const accountIndex = user?.accountIds.indexOf(currentAccount)

      const nextAccount =
        accountIndex >= 0 && accountIndex < user?.accountIds.length - 1 ? accountIndex + 1 : 0

      selectedAccount(user?.accountIds[nextAccount])
    }
  }

  const { data: balancesData, isLoading: isBalanceLoading } = useListBalanceQuery({
    accountIds: [currentAccount].filter((id) => Boolean(id)),
    userId: user?.id ?? '',
  })

  const balances = balancesData ?? []

  const handleSetSearch = (query: string) => setFilters({ query: query ?? '' })
  const handleDateSelect = (range: DateRange) =>
    setFilters({ dateFrom: range.from?.toISOString() ?? '', dateTo: range.to?.toISOString() ?? '' })

  const dateTo = getFilter('dateTo')
  const dateFrom = getFilter('dateFrom')

  const dateRange: DateRange = {
    to: dateTo ? new Date(dateTo) : CURRENT_DATE,
    from: dateFrom ? new Date(dateFrom) : CURRENT_DATE,
  }

  const filter = useMemo(
    () => ({
      accountIds: [currentAccount].filter((id) => Boolean(id)),
      userId: user?.id || '',
      dateFrom: dateRange.from?.toISOString(),
      dateTo: dateRange.to?.toISOString(),
    }),
    [currentAccount, user?.id, dateRange.from, dateRange.to]
  )

  const { data: expenses, isLoading: isExpensesLoading } = useGetExpensesQuery({
    filter,
  })

  const { data: income, isLoading: isIncomeLoading } = useGetIncomeQuery({
    filter,
  })

  const queryAccount = getFilter('query')
  const { data: transactions } = useListTransactionsQuery({
    filter: {
      accountIds: [queryAccount ? `tink-${queryAccount}` : currentAccount].filter((id) =>
        Boolean(id)
      ),
      userId: user?.id || '',
    },
  })

  const currentBalance = balances.filter(
    (balance) => balance.accountId === currentAccount.replace('tink-', '')
  )[0]

  return (
    <div className="flex flex-col gap-8 w-full">
      <div className="flex gap-3  w-full">
        <SearchBar value={getFilter('query')} onChange={handleSetSearch} />
        <Button
          variant="secondary"
          id="date"
          size="lg"
          onClick={() =>
            handleDateSelect({
              to: CURRENT_DATE,
              from: CURRENT_DATE,
            })
          }
        >
          Today
        </Button>
        <RangeDateSelector value={dateRange} onChange={handleDateSelect} />
      </div>
      <div className="flex gap-3">
        <Card balance={currentBalance} isLoading={isBalanceLoading} onChange={selectNextAccount} />
        <div className="flex gap-5 p-5 bg-input border border-[rgba(255,255,255,0.05)] rounded-2xl w-full">
          <ExpensesCard stats={expenses} isLoading={isExpensesLoading} />
          <IncomeCard stats={income} isLoading={isIncomeLoading} />
        </div>
      </div>
      <div className="flex gap-3">
        {transactions && (
          <>
            <TransactionTable data={transactions} pageSize={12} />
            <ChartTransaction transactions={transactions} />
          </>
        )}
      </div>
    </div>
  )
}
