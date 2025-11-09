import { BankService } from './BankService'
import { useQuery } from '@tanstack/react-query'
import { BankConfig } from '../models/BankConfig'
import { BankConfigMapper } from '../mappers/BankConfigMapper'
import { Exception } from '@/features/utils/Exception'

const LIST_CONFIG_QUERY_KEY = 'list-configs'

export const useListBankConfigsQuery = ({ userId }: { accountIds: string[]; userId: string }) => {
  return useQuery<BankConfig[], Exception>({
    enabled: !!userId,
    queryKey: [LIST_CONFIG_QUERY_KEY, { userId }],
    queryFn: async () => {
      try {
        const configs = await BankService.getApiBankBankConfigs(userId)

        return configs.map(BankConfigMapper.toDomain)
      } catch (error) {
        throw new Exception({ title: 'Failed to fetch bank configs', message: `${error}` })
      }
    },
  })
}
