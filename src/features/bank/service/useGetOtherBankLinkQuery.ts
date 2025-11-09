import { BankService } from './BankService'
import { useQuery } from '@tanstack/react-query'
import { Exception } from '@/features/utils/Exception'

const GET_OTHER_BANK_LINK_QUERY_KEY = 'other-bank-link'

export const useGetOtherBankLinkQuery = (userId: string) => {
  return useQuery<string, Exception>({
    enabled: !!userId,
    queryKey: [GET_OTHER_BANK_LINK_QUERY_KEY, userId],
    queryFn: async () => {
      try {
        const link = await BankService.getApiOtherBankLink(userId)

        return link.link
      } catch (error) {
        throw new Exception({ title: 'Failed to userId', message: `${error}` })
      }
    },
  })
}
