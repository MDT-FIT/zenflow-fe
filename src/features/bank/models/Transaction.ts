import { TransactionType } from './TransactionType'

export interface Transaction {
  amount: number
  result: boolean
  type: TransactionType
  date: string
}

export const Transaction = {
  create,
}

export function create(init?: Partial<Transaction>): Transaction {
  return {
    amount: init?.amount ?? 0,
    result: init?.result ?? false,
    type: init?.type ?? TransactionType.Default,
    date: init?.date ?? new Date().toISOString(),
  }
}
