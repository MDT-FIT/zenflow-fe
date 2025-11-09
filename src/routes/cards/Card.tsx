import type { Balance } from '@/features/bank/models/Balance'
import { Loader2 } from 'lucide-react'

export interface CardProps {
  onChange?: () => void
  balance: Balance
  isLoading: boolean
}

export function Card({ balance, isLoading, onChange }: CardProps) {
  if (isLoading) {
    return (
      <div className="flex z-3 flex-col p-5 gap-6 card-bg rounded-xl border border-[rgba(255,255,255,0.05)]">
        <div className="w-full h-full flex justify-center items-center">
          <Loader2 className="h-14 w-14 animate-spin text-primary" />
        </div>
      </div>
    )
  }

  if (!balance) {
    return null
  }

  const formatted = balance?.currency
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: balance.currency,
      }).format(balance.amount)
    : ''

  const masked = balance.accountId.replace(/^(.{4}).*(.{4}.)$/, '$1 **** **** **** **** $2')

  return (
    <div className="h-[150px] after:content-[''] after:bg-primary after:absolute after:w-[80%] after:h-12 after:rounded-lg after:-bottom-2 after:-z-1 relative w-fit after:translate-x-1/2 after:right-1/2">
      <div
        className="flex z-3 flex-col p-5 gap-6 card-bg rounded-xl border border-[rgba(255,255,255,0.05)]"
        onClick={onChange}
      >
        <div className="flex justify-between gap-6">
          <p className="whitespace-nowrap text-white">Tink</p>
          {onChange && <p className="text-right">Tap to change the card</p>}
        </div>
        <p className="text-white text-xl tracking-[0.1rem] whitespace-nowrap text-center">
          {masked}
        </p>
        <div className="flex justify-between items-baseline-last">
          <p className="text-white text-xs">29/29 DEBIT</p>
          <p className="text-white text-xl">{formatted}</p>
        </div>
      </div>
    </div>
  )
}
