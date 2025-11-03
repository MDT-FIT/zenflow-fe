export interface Stats {
  amount: number
  scale: number
  currency: string
  accountIds: string[]
  userId: string
  changePercentage: number
}

export const Stats = {
  create,
}

export function create(init?: Partial<Stats>): Stats {
  return {
    amount: init?.amount ?? 0,
    scale: init?.scale ?? 2,
    currency: init?.currency ?? '',
    accountIds: init?.accountIds ?? [],
    userId: init?.userId ?? '',
    changePercentage: init?.changePercentage ?? 0,
  }
}
