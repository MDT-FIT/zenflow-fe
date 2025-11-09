import type { TransactionTypeDto } from './TransactionTypeDto'

export interface TransactionDto {
  amount: number
  transactionType: TransactionTypeDto
  userId: string
  accountId: string
  scale: number
  currency: string
  dateTime: Date
  result: 'SUCCESS' | 'PENDING'
}
