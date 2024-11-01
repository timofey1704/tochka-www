export const fetchAbout = async () => {
  //   const API_URL = process.env.NEXT_PUBLIC_API_URL
  const API_URL = 'http://127.0.0.1:8000/api/v1'

  const response = await fetch('http://127.0.0.1:8000/api/v1/texts/')
  if (!response.ok) {
    throw new Error('Failed to fetch About tab')
  }

  const data = await response.json()
  return data.objects || []
}
