import { UfsModel, CitiesModel } from './../model/locality';

export const mockLoadUfs = (): UfsModel => ({
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