import { makeDbLoadStudentsByAccount } from './../../../usecases/student/load-students-by-account/db-load-students-by-account';
import { LoadStudentsByAccountController } from './../../../../../presentation/controllers/student/load-students-by-account/load-students-by-account-controller';

export const makeLoadStudentsByAccountController = (): LoadStudentsByAccountController => {
  const loadStudentsByAccountController = new LoadStudentsByAccountController(makeDbLoadStudentsByAccount())
  return loadStudentsByAccountController
}