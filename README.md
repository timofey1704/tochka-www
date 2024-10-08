# Студия звукозаписи "Точка"

Добро пожаловать в репозиторий сайта студии звукозаписи "Точка". Этот проект включает в себя фронтенд на React.js и бэкенд на Express.js с базой данных PostgreSQL.

## Описание

Сайт студии звукозаписи "Точка" предоставляет информацию о наших услугах, ценах и контактные данные. Пользователи могут записываться на сеансы записи, просматривать галерею наших работ и оставлять отзывы.

## Технологии

### Фронтенд

- **React.js** - библиотека для создания пользовательских интерфейсов.

### Бэкенд

- **Express.js** - веб-фреймворк для Node.js.
- **PostgreSQL** - реляционная база данных для хранения данных.

## Установка

### Предварительные требования

Для запуска проекта вам потребуются:

- Node.js (рекомендуется версия 14.x или выше)
- PostgreSQL (рекомендуется версия 12.x или выше)

### Шаги для установки

1. **Клонирование репозитория:**

   ```sh
   git clone https://github.com/timofey1704/tochka-www.git
   cd tochka-www
   ```

2. **Установка зависимостей для фронтенда и бэкенда:**

   ```sh
   cd frontend
   npm install

   cd api
   npm install
   ```

3. **Настройка базы данных:**

   Создайте базу данных PostgreSQL и выполните миграции:

   ```sh
   createdb postgres
   # Выполните миграции, если они имеются
   # Например, если используется Sequelize:
   npx sequelize-cli db:migrate
   ```

4. **Настройка переменных окружения:**

   Создайте файл `.env` в директории `api` и добавьте необходимые переменные окружения:

   ```env
   # telegram data
   BOT_TOKEN
   CHAT_ID

   # database connection

    DB_USER
   DB_HOST
   DB_NAME
   DB_PASSWORD
   DB_PORT = 5432

   # jwt

   JWT_SECRET
   ```

````

5. **Запуск проекта:**

   Откройте два терминала или используйте вкладки в одном терминале.

   В первом терминале запустите бэкенд:

   ```sh
   cd api
   npm run dev
````

Во втором терминале запустите фронтенд:

```sh
cd frontend
npm start
```

Теперь проект будет доступен по адресу `http://localhost:3000`.

## Использование

На главной странице вы найдёте информацию о студии, услугах и ценах. Вы можете записаться на сеанс, оставив заявку через форму обратной связи. В разделе галереи представлены фотографии и ссылки на наши работы.

## Вклад

Если вы хотите внести вклад в проект, пожалуйста, следуйте этим шагам:

1.  Форкните этот репозиторий.
2.  Создайте ветку с вашей функцией (`git checkout -b feature/AmazingFeature`).
3.  Сделайте коммит ваших изменений (`git commit -m 'Добавлена новая функция'`).
4.  Запушьте в ветку (`git push origin feature/AmazingFeature`).
5.  Откройте Pull Request.

## Лицензия

Этот проект лицензирован под лицензией MIT.

---

Если у вас есть вопросы или предложения, пожалуйста, свяжитесь с нами по электронной почте info@tochkarecords.com.
