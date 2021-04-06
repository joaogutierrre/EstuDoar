import { makeDbLoadAllStudents } from './../../../usecases/student/load-all-students/db-load-all-students';
import { LoadAllStudentsController } from './../../../../../presentation/controllers/student/load-all-students/load-all-students-controller';

export const makeLoadAllStudentsController = (): LoadAllStudentsController => {
  const loadAllStudentsController = new LoadAllStudentsController(makeDbLoadAllStudents())
  return loadAllStudentsController
}