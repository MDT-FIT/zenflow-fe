export interface Balance {
  amount: number
  scale: number
  currency: string
  accountId: string
  userId: string
}

export const Balance = {
  create,
}

export function create(init?: Partial<Balance>): Balance {
  return {
    amount: init?.amount ?? 0,
    scale: init?.scale ?? 2,
    currency: init?.currency ?? '',
    accountId: init?.accountId ?? '',
    userId: init?.userId ?? '',
  }
}
