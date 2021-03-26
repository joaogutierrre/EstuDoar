import { UfsModel } from './../model/locality';

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