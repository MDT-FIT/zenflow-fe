import { Button } from '../../components/ui/button'
import { LogInForm } from './components/LogInForm'
import { useAuth } from '@/features/auth/context/useAuth'

const FORM_ID = 'log-in-form'
export const LogIn = () => {
  const { login, isLoginIn } = useAuth()

  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-6">
          <div className="w-[360px] flex flex-col gap-6 justify-center p-3">
            <h2>Log in</h2>
            <LogInForm id={FORM_ID} onSubmit={login} />
            <Button variant="default" size="lg" type="submit" form={FORM_ID} disabled={isLoginIn}>
              Log in
            </Button>
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
