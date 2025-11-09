import type { BankConfigDto } from '@/api/dto/BankConfigDto'
import type { BankConfig } from '../models/BankConfig'
import { BankMapper } from './BankMapper'

export const BankConfigMapper = {
  toDomain,
}

export function toDomain(dto: BankConfigDto): BankConfig {
  console.log(BankMapper[dto.name])
  console.log(dto.name)
  return {
    id: dto.id,
    name: BankMapper[dto.name],
    apiLink: dto.apiLink.trim() ?? '',
    logo: dto.logo ?? '',
    isEnabled: dto.isEnabled ?? false,
  }
}
