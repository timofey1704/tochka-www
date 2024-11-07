import { InstrumentListing } from '@/app/types'

export async function fetchInstrumentsListing(): Promise<InstrumentListing[]> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  try {
    const res = await fetch(`${API_URL}/listing/`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    const data = await res.json()

    // Проверяем, что получили массив объектов
    const listings = Array.isArray(data.objects) ? data.objects : []

    // Парсим JSON-поля для каждого элемента
    return listings.map((item: any) => {
      try {
        return {
          ...item,
          features: JSON.parse(item.features.replace(/'/g, '"') || '[]'),
          headertexts: JSON.parse(item.headertexts.replace(/'/g, '"') || '[]'),
          images: JSON.parse(item.images.replace(/'/g, '"') || '[]'),
        }
      } catch (parseError) {
        console.error('Error parsing JSON fields for item:', item, parseError)
        return item // Возвращаем элемент без парсинга в случае ошибки
      }
    })
  } catch (error) {
    console.error('Error fetching data:', error)
    return []
  }
}
