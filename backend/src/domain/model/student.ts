export type StudentModel = {
  id: string
  accountId: string
  name: string
  age: number
  uf: string
  city: string
  school: string
  about: string
  image: string
  items: ItemModel[]
}

export type ItemModel = {
  category: string
  quantity: number
  donated: number
}