export type UfsModel = {
  ufs: UfModel[]
}

export type UfModel = {
  id: number
  acronym: string
  name: string
}

export type CitiesModel = {
  cities: CityModel[]
}

export type CityModel = {
  id: number
  name: string
}