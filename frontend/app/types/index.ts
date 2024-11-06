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
  artistname: string
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
