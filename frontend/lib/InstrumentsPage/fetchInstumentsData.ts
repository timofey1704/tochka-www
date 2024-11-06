import { Instrument } from '@/app/types'

export async function fetchInstrumentsData(): Promise<Instrument[]> {
  const API_URL = 'http://127.0.0.1:8000/api/v1'

  try {
    const res = await fetch(`${API_URL}/instruments/`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    //проверка на то что получили массив
    return Array.isArray(data) ? data : data.objects || []
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
