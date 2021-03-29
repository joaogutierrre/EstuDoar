import { makeAddStudentController } from './../factories/controllers/student/add-student/add-student-controller-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { parentAuth } from './../middlewares/auth';
import { Router } from 'express';

export default (router: Router): void => {
  router.post('/students', parentAuth, adaptRoute(makeAddStudentController()))
}