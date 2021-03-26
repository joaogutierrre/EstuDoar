import { mockCitiesModel, mockUfsModel } from './../../domain/test/mock-locality';
import { LoadCitiesByUfService } from './../protocols/service/load-cities-by-uf-service';
import { UfsModel, CitiesModel } from './../../domain/model/locality';
import { LoadUfsService } from './../protocols/service/load-ufs-service';

export class LoadUfsServiceSpy implements LoadUfsService {
  wasCalled: boolean
  result: object
  async loadAllUfs (): Promise<UfsModel> {
    this.wasCalled = true
    return mockUfsModel()
  }
}

export class LoadCitiesByUfServiceSpy implements LoadCitiesByUfService {
  data: string
  result: object
  async loadCitiesByUf (uf: string): Promise<CitiesModel> {
    this.data = uf
    return mockCitiesModel()
  }
}