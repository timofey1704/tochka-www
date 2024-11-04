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
