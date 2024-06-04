import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { showError } from '../../redux/slices/notificationSlice'

const setupAxiosInterceptors = (store) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      const { dispatch } = store
      if (error.response && error.response.status === 401) {
        // удаляем токен из localStorage
        localStorage.removeItem('token')
        // перенаправляем на страницу логина
        dispatch(
          showError({
            message: 'Время сессии истекло, пожалуйста, войдите снова.',
            position: 'bottom-center',
          })
        )
        const navigate = useNavigate()
        navigate('/login')
      }
      return Promise.reject(error)
    }
  )
}

export default setupAxiosInterceptors
