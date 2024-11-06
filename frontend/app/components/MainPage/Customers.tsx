import React from 'react'
import { fetchCustomers } from '@/lib/MainPage/fetchCustomers'
import { CustomersData } from '@/app/types'

const Customers = async () => {
  const customers: CustomersData[] = await fetchCustomers()

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-center mb-8 text-gray-900 sm:text-4xl">
        Наши клиенты
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {customers.map((customer) => (
          <a
            key={customer.id}
            href={customer.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl no-underline"
          >
            <div className="flex items-center justify-center mb-4 text-4xl">
              <img
                src={customer.photourl}
                alt={customer.artist_name}
                className="rounded-full object-cover"
              />
            </div>

            <div className="text-xl text-center font-palanquin font-semibold mb-4 text-black hover:text-blue-700">
              {customer.artist_name}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Customers
