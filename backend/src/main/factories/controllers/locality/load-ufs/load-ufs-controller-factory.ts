import { LoadUfsController } from './../../../../../presentation/controllers/locality/load-ufs/load-ufs-controller';
import { makeApiLoadUfs } from '../../../usecases/locality/load-ufs/api-load-ufs-factory';

export const makeLoadUfsController = (): LoadUfsController => {
  const loadUfsController = new LoadUfsController(makeApiLoadUfs())
  return loadUfsController
}