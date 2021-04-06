import { makeCategoryController } from '../factories/controllers/category/category-controller-factory';
import { Router } from 'express';
import { adaptRoute } from '../adapters/express-route-adapter';

export default (router: Router): void => {
    router.get('/category', adaptRoute(makeCategoryController()))
  }