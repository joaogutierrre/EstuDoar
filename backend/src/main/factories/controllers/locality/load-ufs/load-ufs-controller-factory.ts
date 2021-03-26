import { makeApiLoadUfs } from '../../../usecases/locality/load-ufs/api-load-ufs-factory';
import { LoadUfsController } from '../../../../../presentation/controllers/load-ufs-controller';

export const makeLoadUfsController = (): LoadUfsController => {
  const loadUfsController = new LoadUfsController(makeApiLoadUfs())
  return loadUfsController
}