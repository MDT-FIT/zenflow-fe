import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'

export const MainLayout = () => {
  return (
    <main className="w-full flex h-screen gap-4 p-12">
      <Sidebar />
      <div className="w-full h-full flex">
        <Outlet />
      </div>
    </main>
  )
}
