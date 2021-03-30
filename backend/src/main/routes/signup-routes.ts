import { makeSignUpController } from '../factories/controllers/login/signup/signup-controller-factory';
import { adaptRoute } from '../adapters/express-route-adapter';
import { Router } from 'express';

export default (router: Router): void => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}