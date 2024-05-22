import React from 'react'
import { Helmet } from 'react-helmet'
import About from './About'

const Contacts = () => {
  const currentURL = window.location.href

  return (
    <>
      <div>
        <Helmet>
          <title>Tochka Records - Homepage</title>
          <meta
            name="Tochka Records"
            content="Добро пожаловать в студию звукозаписи Точка! Мы - команда опытных звукорежиссеров и музыкальных продюсеров, готовых превратить ваше музыкальное видение в реальность. С нами вы получите высококачественную запись, мастеринг и сведение, а также индивидуальный подход к каждому проекту. Доверьте свою музыку профессионалам - студия звукозаписи Точка."
          />
          <link rel="canonical" href={currentURL} />
        </Helmet>

        <div className="about">
          <About />
        </div>
      </div>
    </>
  )
}

export default Contacts
