import { makeDbDeleteStudentById } from '../../../usecases/student/delete-student-by-id/db-delete-student-by-id';
import { DeleteStudentByIdController } from './../../../../../presentation/controllers/student/delete-student-by-id/delete-student-by-id-controller';
import { makeDeleteStudentByIdValidation } from './delete-student-by-id-validation-factory';

export const makeDeleteStudentByIdController = (): DeleteStudentByIdController => {
  const deleteStudentByIdController = new DeleteStudentByIdController(makeDbDeleteStudentById(), makeDeleteStudentByIdValidation())
  return deleteStudentByIdController
}