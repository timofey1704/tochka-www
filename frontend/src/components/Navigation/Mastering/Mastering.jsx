import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet'
import TrackFormPopup from '../../TrackFormPopup/TrackFormPopup'

const Mastering = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => {
    setIsPopupOpen(true)
  }

  const currentURL = window.location.href

  return (
    <div>
      <Helmet>
        <title>Tochka Records - Record a Track</title>
        <meta
          name="Tochka Records - Mastering"
          content="Добро пожаловать в студию звукозаписи Точка! Мы - команда опытных звукорежиссеров и музыкальных продюсеров, готовых превратить ваше музыкальное видение в реальность. С нами вы получите высококачественную запись, мастеринг и сведение, а также индивидуальный подход к каждому проекту. Доверьте свою музыку профессионалам - студия звукозаписи Точка."
        />
        <link rel="canonical" href={currentURL} />
      </Helmet>

      <motion.div
        className="min-h-screen flex flex-col items-center justify-between bg-black text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-1 flex-col items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Писать музыку
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            просто как никогда.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mb-8 sm:mb-16 md:mb-16 lg:mb-20 xl:mb-24"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.p
            className="text-m md:text-l lg:text-xl xl:text-2xl mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            От 500р/час
          </motion.p>

          <motion.button
            className="px-6 py-2 text-s  md:text-m lg:text-l xl:text-xl rounded-2xl border-1 border-white bg-blue-700 text-white"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
            onClick={openPopup}
          >
            Записаться
          </motion.button>
          {isPopupOpen && (
            <TrackFormPopup onClose={() => setIsPopupOpen(false)} />
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Дополнительная секция
        </motion.h2>
        <motion.p
          className="text-xl md:text-xl lg:text-2xl xl:text-3xl"
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Содержание этой секции появится при прокрутке.
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Mastering
