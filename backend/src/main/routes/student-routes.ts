import { makeUpdateStudentByIdController } from './../factories/controllers/student/update-student-by-id/update-student-by-id-controller-factory';
import { makeLoadStudentsByAccountController } from './../factories/controllers/student/load-students-by-account/load-students-by-account-factory';
import { makeAddStudentController } from './../factories/controllers/student/add-student/add-student-controller-factory';
import { adaptRoute } from './../adapters/express-route-adapter';
import { auth } from './../middlewares/auth';
import { Router } from 'express';
import { makeDeleteStudentByIdController } from '../factories/controllers/student/delete-student-by-id/delete-student-by-id-controller-factory';

export default (router: Router): void => {
  router.post('/students', auth, adaptRoute(makeAddStudentController()))
  router.get('/students', auth, adaptRoute(makeLoadStudentsByAccountController()))
  router.put('/students', auth, adaptRoute(makeUpdateStudentByIdController()))
  router.delete('/students', auth, adaptRoute(makeDeleteStudentByIdController()))
}