import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Customers = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:4000/api/texts/customers'
        )
        setCustomers(response.data)
      } catch (error) {
        console.error('Error fetching customers', error)
      }
    }
    fetchData()
  }, [])

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
                alt={customer.artistname}
                className="rounded-full object-cover"
              />
            </div>

            <div className="text-xl text-center font-semibold mb-4 text-black">
              {customer.artistname}
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Customers
