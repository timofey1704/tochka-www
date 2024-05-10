import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    // Здесь выполняется логика отправки запроса на сервер для аутентификации
    // Если аутентификация успешна, выполните редирект
    navigate('/dashboard') // Замените '/dashboard' на путь куда нужно редиректить после успешной аутентификации
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Войдите в аккаунт администратора
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6"
              >
                Логин
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm pl-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-red sm:text-sm sm:leading-6"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6"
                >
                  Пароль
                </label>
                <div className="text-sm">
                  <a
                    href="/password-recovery"
                    className="font-semibold hover:text-dark-red"
                  >
                    Забыли пароль?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm pl-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-dark-red sm:text-sm sm:leading-6"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-dark-red px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Войти
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login
