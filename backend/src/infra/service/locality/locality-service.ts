import { LoadCitiesByUfService } from './../../../data/protocols/service/load-cities-by-uf-service';
import { LoadUfsService } from './../../../data/protocols/service/load-ufs-service';
import axios from 'axios'

export class LocalityService implements LoadUfsService, LoadCitiesByUfService {
  async loadAllUfs (): Promise<any> {
    try {
      const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  async loadCitiesByUf (uf: string): Promise<any> {
    const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
    if (response.data.statusCode !== 200) {
      return null
    }
    return response.data
  }
}