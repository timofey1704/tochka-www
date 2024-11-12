type MainData = {
  name: string
  description: string
  link: string
  icon: string
}

export type AboutData = MainData & {
  id: number
}

export type MainTextData = MainData & {
  component: string
}

export type CustomersData = {
  id: number
  photourl: string
  artist_name: string
  link: string
}

export type Instrument = {
  id: number
  title: string
  img_url: string
  description: string
  link: string
  price: string
  image: string
  name: string
  features: string[]
}

export type InstrumentCardData = {
  id: number
  link: string
  img_url: string
  name: string
  description: string
  features: string[]
  title: string
}

export interface InstrumentCardProps {
  instrument: InstrumentCardData
}

export type InstrumentListing = {
  id: number
  name: string
  link: string
  description: string
  features: { name: string; description: string }[]
  images: { src: string; alt: string }[]
  headertexts: { header: string; description: string }[]
}

export type ListingProps = {
  params: {
    link: string
  }
}

export type Lead = {
  message?: string
  phone?: string
  date?: string
  reason?: string
}

export type LeadRequest = {
  url: string
  data: Lead
}
export type LeadState = {
  leads: Lead[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

export type LeadPopupContentProps = {
  onClose: () => void
}
