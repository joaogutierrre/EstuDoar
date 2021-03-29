import { mockStudentModel } from './../../domain/test/mock-student';
import { StudentModel } from './../../domain/model/student';
import { AddStudent, AddStudentParams } from './../../domain/usecases/student/add-student';

export class AddStudentSpy implements AddStudent {
  data: object
  result: object
  async add (data: AddStudentParams): Promise<StudentModel> {
    this.data = data
    this.result = mockStudentModel()
    return mockStudentModel()
  }
}