import { UfsModel } from './../../model/locality';

export interface LoadUfs {
  load: () => Promise<UfsModel[]>
}