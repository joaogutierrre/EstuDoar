import { makeUpdateStudentByIdController } from './../factories/controllers/student/update-student-by-id/update-student-by-id-controller-factory';
import { makeLoadStudentsByAccountController } from './../factories/controllers/student/load-students-by-account/load-students-by-account-factory';
import { makeAddStudentController } from './../factories/controllers/student/add-student/add-student-controller-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { parentAuth } from './../middlewares/auth';
import { Router } from 'express';

export default (router: Router): void => {
  router.post('/students', parentAuth, adaptRoute(makeAddStudentController()))
  router.get('/students', parentAuth, adaptRoute(makeLoadStudentsByAccountController()))
  router.put('/students', parentAuth, adaptRoute(makeUpdateStudentByIdController()))
}