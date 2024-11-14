import Link from 'next/link'
import { FiInstagram } from 'react-icons/fi'
import { SlSocialVkontakte } from 'react-icons/sl'
import { IoIosCall } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 mt-auto">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">О нас</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/privacy-policy" className="hover:underline">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Навигация</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link href="/price" className="hover:underline">
                  Цены
                </Link>
              </li>
              {/* <li className="mb-2">
                <Link href="/schedule" className="hover:underline">
                  Расписание
                </Link>
              </li> */}
              <li className="mb-2">
                <Link href="/mastering" className="hover:underline">
                  Трек под ключ
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/instruments" className="hover:underline">
                  Инструментальная база
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Администрация</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link
                  href="http://127.0.0.1:8000/admin/login/?next=/admin/"
                  className="hover:underline"
                >
                  Войти
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-2xl font-bold mb-4">Следите за нами</h3>
            <div className="flex space-x-4 text-gray-400">
              <a
                href="tel:+79622504799"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoIosCall className="h-6 w-6 hover:text-white" />
              </a>
              <a
                href="https://vk.com/to4ka_studio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SlSocialVkontakte className="h-6 w-6 hover:text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiInstagram className="h-6 w-6 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-600 pt-4">
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Created by{' '}
            <a
              href="https://t.me/mnk_mac1ntosh"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              mnk_mac1ntosh.
            </a>{' '}
            Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
