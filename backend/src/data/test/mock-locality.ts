import { UfsModel } from './../../domain/model/locality';
import { LoadUfsService } from './../protocols/service/load-ufs-service';

export class LoadUfsServiceSpy implements LoadUfsService {
  wasCalled: boolean
  result: object
  async loadAllUfs (): Promise<UfsModel> {
    this.wasCalled = true
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