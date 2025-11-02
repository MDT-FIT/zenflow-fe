import { Sidebar } from './Sidebar'

export const MainLayout = () => {
  return (
    <main>
      <Sidebar />
      <div className="content"></div>
    </main>
  )
}
