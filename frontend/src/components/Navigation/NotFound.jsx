import React from 'react'

const NotFound = () => {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-dark-red">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Страница не найдена
          </h1>
          <p className="mt-6 text-base leading-7">
            Просим прощения, такой страницы не существует
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-dark-red px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm"
            >
              На главную
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default NotFound
