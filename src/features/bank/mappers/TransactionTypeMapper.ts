import { TransactionType } from '../models/Transaction'

export const TransactionTypeMapper: Record<string, TransactionType> = {
  INCOME: TransactionType.Income,
  EXPENSES: TransactionType.Expense,
  TRANSFER: TransactionType.Transfer,
  DEFAULT: TransactionType.Default,
}
