import { LoadUfsService } from './../../../protocols/service/load-ufs-service';
import { UfsModel } from './../../../../domain/model/locality';
import { LoadUfs } from './../../../../domain/usecases/locality/load-ufs';

export class ApiLoadUfs implements LoadUfs {
  constructor (
    private readonly loadUfsService: LoadUfsService
  ) {}

  async load (): Promise<UfsModel> {
    const ufs = await this.loadUfsService.loadAllUfs()
    return ufs
  }
}