import { LoadCitiesByUfService } from './../../../data/protocols/service/load-cities-by-uf-service';
import { LoadUfsService } from './../../../data/protocols/service/load-ufs-service';
import axios from 'axios'
import { LoadSchoolService } from '../../../data/protocols/service/load-school-service';
import { SchoolsModel } from '../../../domain/model/school';

export class LocalityService implements LoadUfsService, LoadCitiesByUfService{
  async loadAllUfs (): Promise<any> {
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    return response.data
  }

  async loadCitiesByUf (uf: string): Promise<any> {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    return response.data
  }
}