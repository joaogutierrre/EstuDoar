import { UfsModel, CitiesModel } from './../model/locality';
import { SubdistrictsModel } from './../model/subdistrict'

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

export const mockSubdistrictsModel = (): SubdistrictsModel =>({
  subdistricts:[{
    id: 'any_id',
    code: 'any_code',
    name: 'any_name'
  },{
    id: 'other_id',
    code: 'other_code',
    name: 'other_name'
  }]
})