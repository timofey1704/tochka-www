import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-6 lg:px-8 py-28">
      <h1 className="text-3xl font-bold mb-6">Политика конфиденциальности</h1>
      <section>Последнее обновление: 11 января 2023 года</section>
      <section className="mt-4">
        Мы, в студии звукозаписи "Точка", заботимся о вашей конфиденциальности и
        стремимся защищать ваши персональные данные. Данная Политика
        конфиденциальности объясняет, какие данные мы собираем, как мы их
        используем, храним и защищаем.
      </section>

      <h2 className="text-2xl font-semibold mt-6 mb-4">1. Сбор информации</h2>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        1.1. Персональная информация
      </h3>
      <section>
        Мы можем собирать персональную информацию, такую как ваше имя, адрес
        электронной почты, номер телефона и платежные данные, когда вы:
      </section>
      <ul className="list-disc ml-8 mt-2">
        <li>Оформляете заказ на наши услуги.</li>
        <li>Связываетесь с нами через контактные формы или по телефону.</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">
        1.2. Автоматически собираемая информация
      </h3>
      <section>
        Мы можем автоматически собирать информацию о вашем устройстве и
        использовании нашего сайта, такую как IP-адрес, тип браузера, страницы,
        которые вы посещаете, и время, проведенное на сайте. Эти данные
        собираются с помощью файлов cookie и других технологий отслеживания.
      </section>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        2. Использование информации
      </h2>
      <section>Мы используем собранную информацию для:</section>
      <ul className="list-disc ml-8 mt-2">
        <li>Обработки ваших заказов и предоставления услуг.</li>
        <li>Улучшения нашего сайта и обслуживания клиентов.</li>
        <li>Отправки вам информации о наших услугах, акциях и новостях.</li>
        <li>
          Осуществления аналитики и исследований для улучшения нашего бизнеса.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        3. Передача информации третьим лицам
      </h2>
      <section>
        Мы не продаем и не передаем вашу персональную информацию третьим лицам,
        за исключением следующих случаев:
      </section>
      <ul className="list-disc ml-8 mt-2">
        <li>При вашем явном согласии.</li>
        <li>
          При необходимости для выполнения заказа (например, при обработке
          платежей).
        </li>
        <li>При соблюдении законных требований и защиты наших прав.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-4">4. Защита информации</h2>
      <section>
        Мы принимаем разумные меры для защиты вашей персональной информации от
        несанкционированного доступа, использования или раскрытия. Эти меры
        включают использование защищенных серверов, шифрование данных и
        ограничение доступа к информации только для авторизованных сотрудников.
      </section>

      <h2 className="text-2xl font-semibold mt-6 mb-4">5. Ваши права</h2>
      <section>
        Вы имеете право на доступ, исправление, удаление и ограничение обработки
        ваших персональных данных. Для осуществления этих прав, пожалуйста,
        свяжитесь с нами по контактным данным, указанным ниже.
      </section>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        6. Изменения в Политике конфиденциальности
      </h2>
      <section>
        Мы можем периодически обновлять данную Политику конфиденциальности. Мы
        уведомим вас о любых изменениях, разместив новую версию на нашем сайте.
        Пожалуйста, регулярно проверяйте эту страницу для получения актуальной
        информации.
      </section>

      <h2 className="text-2xl font-semibold mt-6 mb-4">
        7. Контактная информация
      </h2>
      <section>
        Если у вас есть вопросы или замечания по поводу данной Политики
        конфиденциальности, пожалуйста, свяжитесь с нами:
      </section>
      <section className="mt-4">
        Студия звукозаписи "Точка"
        <br />
        г. Калиниград, Гаражная улица, дом 2
        <br />
        Телефон:{' '}
        <a href="tel:+79622504799" className="text-blue-500 hover:underline">
          +7 (962) 250-47-99
        </a>
        <br />
        Электронная почта:{' '}
        <a
          href="admin@tochkarecords.com"
          className="text-blue-500 hover:underline"
        >
          admin@tochkarecords.com
        </a>
      </section>
    </div>
  )
}

export default PrivacyPolicy
