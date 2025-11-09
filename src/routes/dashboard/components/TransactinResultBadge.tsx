import { Badge } from '@/components/ui/badge'
import { TransactionResult } from '@/features/bank/models/Transaction'
import { CheckCircle, ClockIcon } from 'lucide-react'
import type { ComponentProps, ReactNode } from 'react'

const ResultBadgeMap: Record<TransactionResult, ComponentProps<typeof Badge>['variant']> = {
  [TransactionResult.Pending]: 'destructive',
  [TransactionResult.Success]: 'default',
}

const ResultIconMap: Record<TransactionResult, ReactNode> = {
  [TransactionResult.Pending]: (
    <ClockIcon size={24} className="h-8 w-8 text-desctructive animate-spin" />
  ),
  [TransactionResult.Success]: <CheckCircle size={24} className="h-8 w-8 text-primary" />,
}

export function TransactinResultBadge({ result }: { result: TransactionResult }) {
  return (
    <Badge variant={ResultBadgeMap[result]}>
      {ResultIconMap[result]}
      {result}
    </Badge>
  )
}
