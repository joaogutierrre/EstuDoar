import { DeleteStudentById } from './../../domain/usecases/student/delete-student-by-id';
import { UpdateStudentById, UpdateStudentParams } from './../../domain/usecases/student/update-student-by-id';
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

export class UpdateStudentByIdSpy implements UpdateStudentById {
  data: object
  result: object
  async update (data: UpdateStudentParams): Promise<StudentModel> {
    this.data = data
    this.result = mockStudentModel()
    return mockStudentModel()
  }
}

export class DeleteStudentByIdSpy implements DeleteStudentById {
  accountId: string
  id: string
  async delete (accountId: string, id: string): Promise<void> {
    this.accountId = accountId
    this.id = id
    return null
  }
}