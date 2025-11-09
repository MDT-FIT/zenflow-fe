import { useAuth } from '@/features/auth/context/useAuth'
import { Button } from '../../components/ui/button'
import { AuthLayout } from '../components/AuthLayout'
import { SignInForm } from './components/SignInForm'
import { Link } from 'react-router-dom'

const FORM_ID = 'sign-in-form'
export const SignIn = () => {
  const { signup, isSignUp } = useAuth()

  return (
    <AuthLayout title="Sign in">
      <SignInForm id={FORM_ID} onSubmit={signup} />
      <Button variant="default" size="lg" type="submit" form={FORM_ID} disabled={isSignUp}>
        Sign in
      </Button>
      <Link to="/log-in">
        Already have an account? <span className="text-primary font-medium">Log in</span>
      </Link>
    </AuthLayout>
  )
}
