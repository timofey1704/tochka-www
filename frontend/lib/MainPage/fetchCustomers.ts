export const fetchCustomers = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const response = await fetch(`${API_URL}/customers/`)
  if (!response.ok) {
    throw new Error('Failed to fetch Customers tab')
  }

  const data = await response.json()
  return data.objects || []
}
