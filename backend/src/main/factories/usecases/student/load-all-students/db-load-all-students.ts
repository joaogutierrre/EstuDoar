import { DbLoadAllStudents } from './../../../../../data/usecases/student/load-all-students/db-load-all-students';
import { LoadAllStudents } from './../../../../../domain/usecases/student/load-all-students';
import { StudentMongoRepository } from './../../../../../infra/db/mongodb/student/student-mongo-repository';

export const makeDbLoadAllStudents = (): LoadAllStudents => {
  const studentMongoRepository = new StudentMongoRepository()
  return new DbLoadAllStudents(studentMongoRepository)
}
