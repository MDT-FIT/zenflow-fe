import { useAuth } from '@/features/auth/context/useAuth'
import { useListBalanceQuery } from '@/features/bank/service/useListBalanceQuery'
import { Card } from './Card'
import { useNavigate } from 'react-router-dom'

export const Cards = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  const { data: balancesData, isLoading: isBalanceLoading } = useListBalanceQuery({
    accountIds: user?.accountIds ?? [],
    userId: user?.id ?? '',
  })

  const balances = balancesData ?? []

  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <h2>Connected cards</h2>
        <div className="flex gap-3 w-full">
          {balances.map((balance) => (
            <Card balance={balance} isLoading={isBalanceLoading} />
          ))}
          <div
            onClick={() => navigate('/connect-bank')}
            className="max-h-[150px] w-[300px] flex justify-center items-center z-3 flex-col p-5 gap-6 card-bg rounded-xl border border-[rgba(255,255,255,0.05)] hover:border-primary hover:bg-primary/50 hover:text-primary transition"
          >
            + Connect Bank
          </div>
        </div>
      </div>
    </>
  )
}
