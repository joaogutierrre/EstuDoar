import { LoadStudentsByAccount } from './../../domain/usecases/student/load-students-by-account';
import { mockStudentModel, mockStudentModelList } from './../../domain/test/mock-student';
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

export class LoadStudentsByAccountSpy implements LoadStudentsByAccount {
  data: string
  result: object
  async load (accountId: string): Promise<StudentModel[]> {
    this.data = accountId
    this.result = mockStudentModelList()
    return mockStudentModelList()
  }
}