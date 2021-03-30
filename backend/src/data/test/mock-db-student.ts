import { LoadStudentsByAccountRepository } from './../protocols/db/student/load-students-by-account-repository';
import { mockStudentModel, mockStudentModelList } from './../../domain/test/mock-student';
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

export class LoadStudentsByAccountRepositorySpy implements LoadStudentsByAccountRepository {
  data: string
  result: object
  async loadStudentsByAccount (accountId: string): Promise<StudentModel[]> {
    this.data = accountId
    return mockStudentModelList()
  }
}