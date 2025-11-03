import type { User } from '@/features/auth/models/User'

export interface LogInResponse {
  accessToken: string
  refreshToken: string
  user: User
}
