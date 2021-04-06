import { DbLoadStudentsByAccount } from './../../../../../data/usecases/student/load-students/db-load-students-by-account';
import { LoadStudentsByAccount } from './../../../../../domain/usecases/student/load-students-by-account';
import { StudentMongoRepository } from './../../../../../infra/db/mongodb/student/student-mongo-repository';

export const makeDbLoadStudentsByAccount = (): LoadStudentsByAccount => {
  const studentMongoRepository = new StudentMongoRepository()
  return new DbLoadStudentsByAccount(studentMongoRepository)
}
