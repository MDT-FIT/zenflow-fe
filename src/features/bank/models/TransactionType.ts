export enum TransactionType {
  Default = 'default',
  Income = 'Income',
  Expense = 'Expense',
  Transfer = 'Transfer',
}

export const mapTransactionType = {
  0: [TransactionType.Default],
  1: [TransactionType.Income],
  2: [TransactionType.Expense],
  3: [TransactionType.Transfer],
}
