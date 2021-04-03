import { donatorAuth } from './../middlewares/auth';
import { makeDonationController } from './../factories/controllers/donation/donation-controller-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { Router } from 'express';

export default (router: Router): void => {
  router.post('/donate', donatorAuth, adaptRoute(makeDonationController()))
}