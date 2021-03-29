import { mockStudentModel } from './../../domain/test/mock-student';
import { AddStudentParams } from './../../domain/usecases/student/add-student';
import { StudentModel } from './../../domain/model/student';
import { AddStudentRepository } from '../protocols/db/student/add-student-repository';

export class AddStudentRepositorySpy implements AddStudentRepository {
  data: object
  result: object
  async add (data: AddStudentParams): Promise<StudentModel> {
    this.data = data
    this.result = mockStudentModel()
    return mockStudentModel()
  }
}