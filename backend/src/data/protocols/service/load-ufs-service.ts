import { UfsModel } from './../../../domain/model/locality';

export interface LoadUfsService  {
  loadAllUfs: () => Promise<UfsModel>
}