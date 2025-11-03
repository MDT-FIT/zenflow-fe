import { useAuth } from '@/features/auth/context/useAuth'
import { useListBalanceQuery } from '@/features/bank/service/useListBalanceQuery'
import { useListStatsQuery } from '@/features/bank/service/useListStatsQuery'
import { useListTransactionsQuery } from '@/features/bank/service/useListTransactionsQuery'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const filter = {
    accountIds: user?.accountIds || [],
    userId: user?.id || '',
  }

  if (!user) {
    navigate('/login')
    return null
  }

    if (!user.accountIds || user.accountIds.length === 0) {
    navigate('/connect-bank')
      return null
  }

  const transactions = useListTransactionsQuery({
    filter
  })

    const stats = useListStatsQuery({
    filter
  })

    const balance = useListBalanceQuery({
    accountIds: user.accountIds,
    userId: user.id,
  })

  console.log({ transactions, stats, balance })


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
