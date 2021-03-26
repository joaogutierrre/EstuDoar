import { UfsModel } from './../../domain/model/locality';
import { LoadUfs } from './../../domain/usecases/locality/load-ufs';

export class LoadUfsSpy implements LoadUfs {
  async load (): Promise<UfsModel> {
    return {
      ufs: [{
        id: 1,
        acronym: 'SP',
        name: 'São Paulo'
      }, {
        id: 2,
        acronym: 'RJ',
        name: 'Rio de Janeiro'
      }]
    }
  }
}