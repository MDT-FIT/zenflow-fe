export enum TransactionType {
  Default = 'default',
  Income = 'Income',
  Expense = 'Expense',
  Transfer = 'Transfer',
}

export enum TransactionResult {
  Success = 'Success',
  Pending = 'Pending',
}

export interface Transaction {
  accountId: string,
  userId: string,
  amount: number
  scale: number
  currency: string
  result: TransactionResult
  type: TransactionType
  date: Date | null
}

export const Transaction = {
  create,
}

export function create(init?: Partial<Transaction>): Transaction {
  return {
    amount: init?.amount ?? 0,
    result: init?.result ?? TransactionResult.Pending,
    accountId: init?.accountId ?? '',
    userId: init?.userId ?? '',
    scale: init?.scale ?? 2,
    currency: init?.currency ?? 'USD',
    type: init?.type ?? TransactionType.Default,
    date: init?.date ?? null,
  }
}
