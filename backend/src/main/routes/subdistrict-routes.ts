import { adaptRoute } from "../adapters/express-route-adapter";
import { makeLoadSubdistrictsController } from "./../factories/controllers/subdistrict/load-subdistricts-factory";
import { Router } from 'express';

export default (router: Router): void => {
    router.get('/cities/:subdistricts', adaptRoute(makeLoadSubdistrictsController()))
}