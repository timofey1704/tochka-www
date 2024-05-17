import { Outlet, useLocation } from 'react-router-dom'
import Menu from '../components/Navigation/Menu'

const MainLayout = () => {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/dashboard')

  return (
    <>
      <Menu isAdminRoute={isAdminRoute} />
      <Outlet />
    </>
  )
}

export default MainLayout
