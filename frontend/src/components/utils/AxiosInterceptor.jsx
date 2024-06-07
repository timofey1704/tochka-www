import axios from 'axios'
import { showError } from '../../redux/slices/notificationSlice'
import { logout } from '../../redux/slices/authSlice'

const setupAxiosInterceptors = (store, navigate) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { dispatch } = store
      if (error.response && error.response.status === 401) {
        // удаляем токен из localStorage
        localStorage.removeItem('token')
        // показываем сообщение об ошибке
        dispatch(
          showError({
            message: 'Время сессии истекло, пожалуйста, войдите снова.',
            position: 'bottom-center',
          })
        )

        // выполняем logout
        dispatch(logout())

        // консольное сообщение для дебаггинга
        console.log('Navigating to login page due to 401 error')

        // перенаправляем на страницу логина
        navigate('/login')
      }
      return Promise.reject(error)
    }
  )
}

export default setupAxiosInterceptors
