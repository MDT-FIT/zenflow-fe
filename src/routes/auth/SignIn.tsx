import { Button } from '../../components/ui/button'
import { SignInForm } from './components/SignInForm'

const FORM_ID = 'sign-in-form'
export const SignIn = () => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-6">
          <div className="w-[360px] flex flex-col gap-6 justify-center p-3">
            <h2>Sign in</h2>
            <SignInForm id={FORM_ID} />
            <Button variant="default" size="lg" type="submit" form={FORM_ID}>
              Sign in
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
