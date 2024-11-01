import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  //   const [isOpen, setIsOpen] = useState(false)

  //   useEffect(() => {
  //     const storedIsOpen = sessionStorage.getItem('menuIsOpen')
  //     setIsOpen(storedIsOpen === 'true')
  //   }, [])

  //   const toggleMenu = () => {
  //     const newState = !isOpen
  //     setIsOpen(newState)
  //     sessionStorage.setItem('menuIsOpen', newState.toString()) // Преобразуем в строку
  //   }

  //   const closePopup = () => {
  //     setIsOpen(false)
  //     sessionStorage.setItem('menuIsOpen', 'false') // Строка 'false'
  //   }

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-2 flex items-center justify-between">
        <Link href="/" passHref>
          <div className="flex items-center space-x-4">
            <img
              src="https://i.ibb.co/3kPSzVW/header-logo.png"
              alt="logo"
              className="w-40 h-24"
            />
            <h1 className="hidden lg:block font-postNoBills text-4xl text-gray-800">
              TOCHKA
            </h1>
          </div>
        </Link>
        <div className="flex items-center">
          <div className="space-x-6 hidden lg:flex">
            <Link href="/" passHref>
              <span
                className="text-gray-800 hover:text-blue-600"
                // onClick={closePopup}
              >
                О нас
              </span>
            </Link>
            <Link href="/instruments" passHref>
              <span
                className="text-gray-800 hover:text-blue-600"
                // onClick={closePopup}
              >
                Инструментальная база
              </span>
            </Link>
            <Link href="/mastering" passHref>
              <span
                className="text-gray-800 hover:text-blue-600"
                // onClick={closePopup}
              >
                Трек под ключ
              </span>
            </Link>
            <Link href="/schedule" passHref>
              <span
                className="text-gray-800 hover:text-blue-600"
                // onClick={closePopup}
              >
                Расписание
              </span>
            </Link>
          </div>
          <button
            className="lg:hidden flex flex-col items-center justify-center pr-2 h-9 w-9"
            // onClick={toggleMenu}
          >
            <div
            //   className={`h-1 w-full bg-gray-800 mb-1 transform transition ${
            //     isOpen ? 'rotate-45 translate-y-2' : ''
            //   }`}
            />
            <div
            //   className={`h-1 w-full bg-gray-800 mb-1 transition ${
            //     isOpen ? 'opacity-0' : ''
            //   }`}
            />
            <div
            //   className={`h-1 w-full bg-gray-800 transform transition ${
            //     isOpen ? '-rotate-45 -translate-y-2' : ''
            //   }`}
            />
          </button>
        </div>
      </div>
      <div
      // className={`lg:hidden ${
      //   isOpen ? 'block' : 'hidden'
      // } bg-white shadow-md`}
      >
        {/* <nav className="flex flex-col items-center py-4 space-y-4">
          <Link href="/" passHref>
            <span
              className="text-gray-800 hover:text-blue-600"
              //   onClick={closePopup}
            >
              О нас
            </span>
          </Link>
          <Link href="/instrumental" passHref>
            <span
              className="text-gray-800 hover:text-blue-600"
              //   onClick={closePopup}
            >
              Инструментальная база
            </span>
          </Link>
          <Link href="/mastering" passHref>
            <span
              className="text-gray-800 hover:text-blue-600"
              //   onClick={closePopup}
            >
              Трек под ключ
            </span>
          </Link>
        </nav> */}
      </div>
    </header>
  )
}

export default Header
