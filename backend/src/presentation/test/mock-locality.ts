import { LoadCitiesByUf } from './../../domain/usecases/locality/load-cities-by-uf';
import { mockUfsModel, mockCitiesModel } from './../../domain/test/mock-locality';
import { UfsModel, CitiesModel } from './../../domain/model/locality';
import { LoadUfs } from './../../domain/usecases/locality/load-ufs';

export class LoadUfsSpy implements LoadUfs {
  wasCalled: boolean
  async load (): Promise<UfsModel> {
    this.wasCalled = true
    return mockUfsModel()
  }
}

export class LoadCitiesByUfSpy implements LoadCitiesByUf {
  data: string
  async load (uf: string): Promise<CitiesModel> {
    this.data = uf
    return mockCitiesModel()
  }
}