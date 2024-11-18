'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import PopupProvider from '../components/LeadPopup/PopupProvider'
import Bottom from '../components/Masters/Bottom'

const Mastering = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const openPopup = () => {
    setIsPopupOpen(true)
  }

  return (
    <div>
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
            <PopupProvider onClose={() => setIsPopupOpen(false)} />
          )}
        </motion.div>
      </motion.div>
      <Bottom />
    </div>
  )
}

export default Mastering
