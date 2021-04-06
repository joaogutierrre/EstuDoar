import { adaptRoute } from "../adapters/express-route-adapter"
import { makeRoleController } from "../factories/controllers/role/role-controller-factory"
import { Router } from 'express';

export default (router: Router): void => {
    router.get('/role', adaptRoute(makeRoleController()))
}