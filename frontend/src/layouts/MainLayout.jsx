import { Outlet, useLocation } from 'react-router-dom'
import Menu from '../components/Navigation/Menu'
import Footer from '../components/Footer/Footer'

const MainLayout = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/dashboard')
  const isLoginPage = location.pathname.startsWith('/login')

  return (
    <>
      <Menu isAdminRoute={isAdminRoute} />
      <Outlet />
      {!isAdminRoute && !isLoginPage && <Footer />}
    </>
  )
}

export default MainLayout
