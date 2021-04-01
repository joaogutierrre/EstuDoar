import { makeLoadAllStudentsController } from './../factories/controllers/student/load-all-students/load-all-students-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { Router } from 'express';

export default (router: Router): void => {
  router.get('/feed/students/:uf?/:city?/:subDistrict?/:school?', adaptRoute(makeLoadAllStudentsController()))
}