import { Outlet, useLocation } from 'react-router-dom'
import AdminHeader from '../components/Header/AdminHeader'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/dashboard')
  const isLoginPage = location.pathname.startsWith('/login')

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && (isAdminRoute ? <AdminHeader /> : <Header />)}
      <main className="flex-grow">
        <Outlet />
      </main>
      {!isAdminRoute && !isLoginPage && <Footer />}
    </div>
  )
}

export default MainLayout
