import { DbUpdateStudentById } from './../../../../../data/usecases/student/update-student-by-id/db-update-student-by-id';
import { UpdateStudentById } from './../../../../../domain/usecases/student/update-student-by-id';
import { StudentMongoRepository } from './../../../../../infra/db/mongodb/student/student-mongo-repository';

export const makeDbUpdateStudentById = (): UpdateStudentById => {
  const studentMongoRepository = new StudentMongoRepository()
  return new DbUpdateStudentById(studentMongoRepository)
}
