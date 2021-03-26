import { makeLoadUfsController } from '../factories/controllers/locality/load-ufs/load-ufs-controller-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { Router } from 'express';

export default (router: Router): void => {
  router.get('/loadufs', adaptRoute(makeLoadUfsController()))
}