import { TransactionResult } from '../models/Transaction'

export const TransactionResultMapper: Record<string, TransactionResult> = {
  SUCCESS: TransactionResult.Success,
  PENDING: TransactionResult.Pending,
}
