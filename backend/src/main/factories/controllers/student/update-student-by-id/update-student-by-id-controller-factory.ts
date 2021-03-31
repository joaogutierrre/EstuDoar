import { makeUpdateStudentByIdValidation } from './update-student-by-id-validation-factory';
import { makeDbUpdateStudentById } from './../../../usecases/student/update-student-by-id/db-update-student-by-id';
import { UpdateStudentByIdController } from './../../../../../presentation/controllers/student/update-student-by-id/update-student-by-id-controller';

export const makeUpdateStudentByIdController = (): UpdateStudentByIdController => {
  const updateStudentByIdController = new UpdateStudentByIdController(makeDbUpdateStudentById(), makeUpdateStudentByIdValidation())
  return updateStudentByIdController
}