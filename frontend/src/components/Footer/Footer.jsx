import { NavLink } from 'react-router-dom'
import { FiInstagram } from 'react-icons/fi'
import { SlSocialVkontakte } from 'react-icons/sl'
import { IoIosCall } from 'react-icons/io'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Юридическая информация</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <NavLink to="/privacy-policy" className="hover:underline">
                  Политика конфиденциальности
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Навигация</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <NavLink to="/" className="hover:underline">
                  О нас
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/price" className="hover:underline">
                  Цены
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/mastering" className="hover:underline">
                  Трек под ключ
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/instrumental" className="hover:underline">
                  Инструментальная база
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Администрация</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <NavLink to="/login" className="hover:underline">
                  Войти
                </NavLink>
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
            &copy; {new Date().getFullYear()}{' '}
            <NavLink to="/" className="hover:underline">
              Tochka Records.
            </NavLink>{' '}
            Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
