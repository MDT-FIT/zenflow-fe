import { TransactionType } from "../models/Transaction";

export const TransactionTypeMapper: Record<number, TransactionType> = {
    0: TransactionType.Income,
    1: TransactionType.Expense,
     2: TransactionType.Transfer,
      3: TransactionType.Default,
}