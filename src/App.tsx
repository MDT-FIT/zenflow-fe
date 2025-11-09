import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from './routes/auth/SignIn'
import { Dashboard } from './routes/dashboard/Dashboard'
import { Cards } from './routes/cards/Cards'
import { Transactions } from './routes/transactions/Transacions'
import './App.css'
import { ConnectBank } from './routes/auth/ConnectBank'
import { LogIn } from './routes/auth/LogIn'
import { AuthProvider } from './features/auth/context/AuthProvider'
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MainLayout } from './routes/components/MainLayout'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import { Exception } from './features/utils/Exception'
import { AuthGuard } from './features/auth/context/AuthGuard'
import { Logout } from './routes/auth/Logout'

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof Exception && !error.silent) {
        console.log(error.silent)

        switch (error.level) {
          case 'info':
            toast.success(error.message)
            break
          case 'warning':
            toast.loading(error.message)
            break
          case 'error':
            toast.error(error.message)
            break
          default:
            toast.error('An unexpected error occurred')
        }
      }
    },
  }),
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-right" />
      <Router>
        <AuthProvider>
          <Routes>
            <Route element={<AuthGuard />}>
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/log-out" element={<Logout />} />
              <Route path="/connect-bank" element={<ConnectBank />} />
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="/cards" element={<Cards />} />
                <Route path="/transactions" element={<Transactions />} />
              </Route>
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  )
}

export default App
