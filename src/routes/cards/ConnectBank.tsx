import { useAuth } from '@/features/auth/context/useAuth'
import { ConnectBankButton } from './ConnectBankButton'
import { useNavigate } from 'react-router-dom'
import { useListBankConfigsQuery } from '@/features/bank/service/useListBankConfigsQuery'

export const ConnectBank = () => {
  const { user } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    navigate('/log-in')
    return null;
  }

  const { data, isLoading } = useListBankConfigsQuery({
    userId: user.id,
  })

  const configs = data ?? [];

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-6">
          <div className="max-w-[360px] flex flex-col gap-6 justify-center p-3">
            <h2>Connect Bank</h2>
            <div className="flex flex-col gap-2">
              {configs.map(config => <ConnectBankButton
                bank={config.name}
                subtitle="Connect any European bank you want"
                image={config.logoUrl}
                link={config.link}
              />)}
              
              {/* <ConnectBankButton
                bank="Monobank"
                subtitle="Connect any European bank you want"
                image=""
                link=""
              /> */}
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
