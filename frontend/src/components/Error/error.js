import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useSelector, useDispatch } from 'react-redux'
import { clearError, selectErrorMessage } from '../../redux/slices/errorSlice'

const Error = () => {
  const errorMessage = useSelector(selectErrorMessage)
  const dispatch = useDispatch()

  useEffect(() => {
    // Каждый раз, когда изменяется errorMessage, вызываем toast.warn
    if (errorMessage) {
      toast.warn(errorMessage)
      dispatch(clearError())
    }
  }, [errorMessage, dispatch])

  return <ToastContainer position="top-right" autoClose={2000} />
}

export default Error
