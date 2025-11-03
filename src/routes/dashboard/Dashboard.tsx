import { useAuth } from '@/features/auth/context/useAuth'
import { useGetExpensesQuery } from '@/features/bank/service/useGetExpensesQuery'
import { useGetIncomeQuery } from '@/features/bank/service/useGetIncomeQuery'
import { useListBalanceQuery } from '@/features/bank/service/useListBalanceQuery'
import { useListTransactionsQuery } from '@/features/bank/service/useListTransactionsQuery'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const filter = {
    accountIds: user?.accountIds || [],
    userId: user?.id || '',
  }

  useEffect(() => {
    if (!user) {
      navigate('/log-in')
    }

    if (!user?.accountIds || user?.accountIds?.length === 0) {
      navigate('/connect-bank')
    }
  }, [user])

  const transactions = useListTransactionsQuery({
    filter
  })

    const expenses = useGetExpensesQuery({
    filter
  })

      const income = useGetIncomeQuery({
    filter
  })

    const balance = useListBalanceQuery({
    accountIds: user?.accountIds ?? [],
    userId: user?.id ?? "",
  })

  console.log({ transactions, income, balance })


  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">

        <div>Card</div>
        <div>Expenses</div>
      </div>
      <div className="flex gap-3">
        <div>Table</div>
        <div>Chart</div>
      </div>
    </div>
  )
}
