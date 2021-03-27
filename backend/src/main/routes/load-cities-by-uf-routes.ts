import { makeLoadCitiesByUfController } from '../factories/controllers/locality/load-cities-by-uf/load-cities-by-uf-factory';
import { adaptRoute } from '../adapters/express-route-adapter';
import { Router } from 'express';

export default (router: Router): void => {
  router.get('/loadcities/:uf', adaptRoute(makeLoadCitiesByUfController()))
}