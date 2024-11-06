import { MainTextData } from '@/app/types'

export const fetchFavors = async () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const response = await fetch(`${API_URL}/texts/`)
  if (!response.ok) {
    throw new Error('Failed to fetch Favors tab')
  }

  const data = await response.json()
  return (
    data.objects.filter((item: MainTextData) => item.component === 'favors') ||
    []
  )
}
