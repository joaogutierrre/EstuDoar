import { DeleteStudentById } from './../../../../../domain/usecases/student/delete-student-by-id';
import { DbDeleteStudentById } from './../../../../../data/usecases/student/delete-student-by-id/db-delete-student-by-id';
import { StudentMongoRepository } from './../../../../../infra/db/mongodb/student/student-mongo-repository';

export const makeDbDeleteStudentById = (): DeleteStudentById => {
  const studentMongoRepository = new StudentMongoRepository()
  return new DbDeleteStudentById(studentMongoRepository)
}
