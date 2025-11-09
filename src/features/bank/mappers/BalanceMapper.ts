import type { BalanceDto } from '@/api/dto/BalanceDto'
import type { Balance } from '../models/Balance'

export const BalanceMapper = {
  toDomain,
}

export function toDomain(dto: BalanceDto): Balance {
  return {
    amount: dto.amount / Math.pow(10, dto.scale),
    accountId: dto.accountId,
    userId: dto.userId,
    scale: dto.scale,
    currency: dto.currency,
  }
}
