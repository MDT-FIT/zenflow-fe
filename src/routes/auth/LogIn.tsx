import { Link } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { AuthLayout } from '../components/AuthLayout'
import { LogInForm } from './components/LogInForm'
import { useAuth } from '@/features/auth/context/useAuth'

const FORM_ID = 'log-in-form'
export const LogIn = () => {
  const { login, isLoginIn } = useAuth()

  return (
    <AuthLayout title="Log in">
      <LogInForm id={FORM_ID} onSubmit={login} />
      <Button variant="default" size="lg" type="submit" form={FORM_ID} disabled={isLoginIn}>
        Log in
      </Button>
      <Link to="/sign-in">
        Don't have an account yet? <span className="text-primary font-medium">Sign Up</span>
      </Link>
    </AuthLayout>
  )
}
