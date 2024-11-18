import React from 'react'
import { CompleteNotificationProps } from '@/app/types'

const CompleteNotification: React.FC<CompleteNotificationProps> = ({
  date,
  time,
  end_time,
}) => (
  <div className="bg-white p-2 py-4 px-9 rounded-2xl shadow-lg">
    <h3 className="font-semibold text-md font-palanquin mb-2">
      Будем вас ждать!
    </h3>
    <div className="text-md pr-10 text-gray-700">
      <p>
        {date}, c {time} по {end_time}
      </p>
    </div>
  </div>
)

export default CompleteNotification
