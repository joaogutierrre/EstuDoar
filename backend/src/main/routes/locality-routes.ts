import { makeLoadCitiesByUfController } from './../factories/controllers/locality/load-cities-by-uf/load-cities-by-uf-factory';
import { makeLoadUfsController } from '../factories/controllers/locality/load-ufs/load-ufs-controller-factory';
import { adaptRoute } from '../adapters/express-route-adapter';
import { Router } from 'express';

export default (router: Router): void => {
  router.get('/ufs', adaptRoute(makeLoadUfsController()))
  router.get('/cities/:uf', adaptRoute(makeLoadCitiesByUfController()))
}