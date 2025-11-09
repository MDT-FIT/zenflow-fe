import type { ReactNode } from 'react'

export interface AuthLayoutProps {
  title: string
  children: ReactNode
}

export const AuthLayout = ({ title, children }: AuthLayoutProps) => {
  return (
    <div className="w-full h-full ">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-6">
          <div className="w-[360px] flex flex-col gap-6 justify-center p-3">
            <h2>{title}</h2>
            {children}
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
