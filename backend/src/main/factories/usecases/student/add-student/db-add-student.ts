import { AddStudent } from './../../../../../domain/usecases/student/add-student';
import { StudentMongoRepository } from './../../../../../infra/db/mongodb/student/student-mongo-repository';
import { DbAddStudent } from './../../../../../data/usecases/student/add-student/db-add-student';

export const makeDbAddStudent = (): AddStudent => {
  const studentMongoRepository = new StudentMongoRepository()
  return new DbAddStudent(studentMongoRepository)
}
