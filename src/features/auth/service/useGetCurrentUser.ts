import { useQuery } from '@tanstack/react-query'
import { Exception } from '@/features/utils/Exception'
import type { User } from '../models/User';
import { AuthService } from './AuthService';
import { UserMapper } from '../mappers/UserMapper';

export const USER_KEY = 'current-user';
const MAX_RETRIES = 0

export const useGetCurrentUser = ({ enabled = true }: { enabled: boolean}) => {
  return useQuery<User, Exception>({
    enabled,
    queryKey: [USER_KEY],
    retry: MAX_RETRIES,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      try {
        
        const response = await AuthService.getApiZenflowAuthGetUser()

        return UserMapper.toDomain(response.user)
      } catch (error) {
        throw new Exception({ title: 'Failed to get current user', message: `${error}` });
      }
    }
  })
}
