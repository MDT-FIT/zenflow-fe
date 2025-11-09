import { Badge } from '@/components/ui/badge'
import { TransactionType } from '@/features/bank/models/Transaction'
import type { ComponentProps } from 'react'

const TypeBadgeMap: Record<TransactionType, ComponentProps<typeof Badge>['variant']> = {
  [TransactionType.Default]: 'outline',
  [TransactionType.Expense]: 'destructive',
  [TransactionType.Income]: 'default',
  [TransactionType.Transfer]: 'secondary',
}

export function TransactionTypeBadge({ type }: { type: TransactionType }) {
  return <Badge variant={TypeBadgeMap[type]}>{type}</Badge>
}
