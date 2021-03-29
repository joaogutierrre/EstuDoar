import { makeAddStudentValidation } from './add-student-validation-factory';
import { makeDbAddStudent } from './../../../usecases/student/add-student/db-add-student';
import { AddStudentController } from './../../../../../presentation/controllers/student/add-student/add-student-controller';

export const makeAddStudentController = (): AddStudentController => {
  const addStudentController = new AddStudentController(makeDbAddStudent(), makeAddStudentValidation())
  return addStudentController
}