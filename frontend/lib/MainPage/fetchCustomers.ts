import { CustomersData } from '@/app/types'

export const fetchCustomers = async () => {
  const API_URL = 'http://127.0.0.1:8000/api/v1'

  const response = await fetch(`${API_URL}/texts/`)
  if (!response.ok) {
    throw new Error('Failed to fetch Customers tab')
  }

  const data = await response.json()
  return (
    data.objects.filter(
      (item: CustomersData) => item.component === 'customers'
    ) || []
  )
}
