import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignIn } from './routes/auth/SignIn'
import { Dashboard } from './routes/dashboard/Dashboard'
import { Cards } from './routes/cards/Cards'
import { Transacions } from './routes/transactions/Transacions'
import './App.css'
import { ConnectBank } from './routes/cards/ConnectBank'
import { LogIn } from './routes/auth/LogIn'
import { AuthProvider } from './features/auth/context/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
       <QueryClientProvider client={queryClient}>

    <Router>
         <AuthProvider>
      <Routes>
          
        <Route path="/" element={<Dashboard />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/transactions" element={<Transacions />} />
        <Route path="/connect-bank" element={<ConnectBank />} />
   
      </Routes>
           </AuthProvider>
    </Router>
     </QueryClientProvider>
  )
}

export default App
