import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import TrackFormPopup from './TrackFormPopup'

describe('TrackFormPopup', () => {
  test('рендерится корректно', () => {
    render(<TrackFormPopup />)
  })

  test('вызывается ерор нотификация если не все поля заполнены', () => {
    const { getByText } = render(<TrackFormPopup />)
    const submitButton = getByText('Записаться')
    fireEvent.click(submitButton)
    expect(getByText('Поля не могут быть пустыми!')).toBeInTheDocument()
  })

  test('отправление запроса в телеграм если все поля заполнены корректно', async () => {
    const onClose = jest.fn() // Мок-функция для onClose
    const { getByText, getByLabelText } = render(
      <TrackFormPopup onClose={onClose} />
    )
    const submitButton = getByText('Записаться')

    // заполнение полей формы
    fireEvent.change(getByLabelText('Ваш Telegram ID:'), {
      target: { value: 'test' },
    })
    fireEvent.change(getByLabelText('Дата:'), {
      target: { value: '2024-06-01' },
    })
    fireEvent.change(getByLabelText('Время:'), { target: { value: '12:00' } })
    fireEvent.change(getByLabelText('Контактный телефон:'), {
      target: { value: '+71234567890' },
    })

    // клик по кнопке "Записаться"
    fireEvent.click(submitButton)

    // проверка что onClose вызывается
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
