import { UfsModel, CitiesModel } from './../model/locality';
import { SchoolsModel } from '../model/school'

export const mockUfsModel = (): UfsModel => ({
  ufs: [{
    id: 1,
    acronym: 'SP',
    name: 'São Paulo'
  }, {
    id: 2,
    acronym: 'RJ',
    name: 'Rio de Janeiro'
  }]
})

export const mockCitiesModel = (): CitiesModel => ({
  cities: [{
    id: 1,
    name: 'Santos'
  }, {
    id: 2,
    name: 'São Paulo'
  }]
})