import { useAuth } from '@/features/auth/context/useAuth'
import { ConnectBankButton } from './components/ConnectBankButton'
import { Loader2 } from 'lucide-react'
import { useListBankConfigsQuery } from '@/features/bank/service/useListBankConfigsQuery'
import { AuthLayout } from '../components/AuthLayout'
import { useEffect } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useConnectBankMutation } from '@/features/bank/service/useConnectBankMutation'
import { Exception } from '@/features/utils/Exception'
import toast from 'react-hot-toast'

export const ConnectBank = () => {
  const { user } = useAuth()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const connectBank = useConnectBankMutation({
    onSuccess: () => navigate('/', { replace: true }),
  })
  const clientId = searchParams.get('credentials_id') ?? ''

  const { data, isLoading } = useListBankConfigsQuery({
    userId: user?.id ?? '',
    accountIds: [],
  })

  useEffect(() => {
    const tryConnectBank = async (userId: string) => {
      try {
        await connectBank.mutateAsync({
          userId,
        })
      } catch (error) {
        if (error instanceof Exception) {
          toast.error(error.message)
        }
      }
    }

    if (clientId && user) {
      tryConnectBank(user.id)
    }
  }, [clientId, user])

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
    <AuthLayout title="Connect Bank">
      <div className="flex flex-col gap-2">{content}</div>
      <Link to="/">
        Back to <span className="text-primary font-medium">Main</span>
      </Link>
    </AuthLayout>
  )
}
