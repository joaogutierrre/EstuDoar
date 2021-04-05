import { adaptRoute } from "../adapters/express-route-adapter";
import { makeLoadSchoolsController } from "../factories/controllers/school/load-schools-factory";
import { Router } from 'express';

export default (router: Router): void => {
    router.get('/cities/:schools', adaptRoute(makeLoadSchoolsController()))
}