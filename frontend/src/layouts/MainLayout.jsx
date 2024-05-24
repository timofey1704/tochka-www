import { Outlet, useLocation } from 'react-router-dom'
import AdminHeader from '../components/Header/AdminHeader'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/dashboard')
  const isLoginPage = location.pathname.startsWith('/login')

  return (
    <>
      {isAdminRoute ? <AdminHeader /> : <Header />}
      <Outlet />
      {!isAdminRoute && !isLoginPage && <Footer />}
    </>
  )
}

export default MainLayout
