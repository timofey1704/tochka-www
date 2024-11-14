import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-2 flex items-center justify-between">
        <Link href="/" passHref>
          <div className="flex items-center space-x-4">
            <Image
              src="https://i.ibb.co/3kPSzVW/header-logo.png"
              alt="logo"
              className="w-40 h-24"
              width={900}
              height={600}
            />
            <h1 className="hidden lg:block font-postNoBills text-4xl text-gray-800">
              TOCHKA
            </h1>
          </div>
        </Link>
        <div className="flex items-center">
          <div className="space-x-6 hidden lg:flex">
            <Link href="/" passHref>
              <span className="text-gray-800 hover:text-blue-600">О нас</span>
            </Link>
            <Link href="/instruments" passHref>
              <span className="text-gray-800 hover:text-blue-600">
                Инструментальная база
              </span>
            </Link>
            <Link href="/mastering" passHref>
              <span className="text-gray-800 hover:text-blue-600">
                Трек под ключ
              </span>
            </Link>
            {/* <Link href="/schedule" passHref>
              <span
                className="text-gray-800 hover:text-blue-600"
              >
                Расписание
              </span>
            </Link> */}
          </div>
          <button className="lg:hidden flex flex-col items-center justify-center pr-2 h-9 w-9"></button>
        </div>
      </div>
    </header>
  )
}

export default Header
