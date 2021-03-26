import { LoadUfsService } from './../../../data/protocols/service/load-ufs-service';
import axios from 'axios'

export class LocalityService implements LoadUfsService {
  async loadAllUfs (): Promise<any> {
    try {
      const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
}