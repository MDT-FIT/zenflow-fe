import type { User } from '../models/User'
import type { UserDto } from '@/api/dto/UserDto'

export const UserMapper = {
  toDomain,
}

export function toDomain(dto: UserDto): User {
  return {
    id: dto.id ?? '',
    username: dto.username ?? '',
    email: dto.email ?? '',
    accountIds: dto.accountIds?.filter((id) => Boolean(id)) ?? [],
  }
}
