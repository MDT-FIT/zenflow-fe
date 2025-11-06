import { useAuth } from '@/features/auth/context/useAuth'
import { ConnectBankButton } from './ConnectBankButton'
import { Loader2 } from 'lucide-react'
import { useListBankConfigsQuery } from '@/features/bank/service/useListBankConfigsQuery'

export const ConnectBank = () => {
  const { user } = useAuth()

  const { data, isLoading } = useListBankConfigsQuery({
    userId: user?.id ?? '',
    accountIds: [],
  })

  const configs = data ?? []

  const content = isLoading ? (
    <Loader2 className="mr-2 h-4 w-4 **animate-spin**" />
  ) : (
    configs.map((config) => (
      <ConnectBankButton
        bank={config.name}
        subtitle="Connect any European bank you want"
        image={config.logo}
        link={config.apiLink}
        key={config.id}
      />
    ))
  )

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-6">
          <div className="max-w-[360px] flex flex-col gap-6 justify-center p-3">
            <h2>Connect Bank</h2>
            <div className="flex flex-col gap-2">
              {content}
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full">
          <img
            className="w-full h-full object-cover"
            src="/images/screen.png"
            alt="Sign In Illustration"
          />
        </div>
      </div>
    </div>
  )
}
