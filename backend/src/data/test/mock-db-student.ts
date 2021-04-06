import { LoadStudentByIdRepository } from './../protocols/db/student/load-student-by-id-repository';
import { LoadAllStudentsParams } from './../../domain/usecases/student/load-all-students';
import { LoadAllStudentsRepository } from './../protocols/db/student/load-all-students-repository';
import { DeleteStudentByIdRepository } from './../protocols/db/student/delete-student-by-id-repository';
import { UpdateStudentParams } from './../../domain/usecases/student/update-student-by-id';
import { UpdateStudentByIdRepository } from './../protocols/db/student/update-student-by-id-repository';
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

export class UpdateStudentByIdRepositorySpy implements UpdateStudentByIdRepository {
  data: object
  result: object
  async updateById (data: UpdateStudentParams): Promise<StudentModel> {
    this.data = data
    this.result = mockStudentModel()
    return mockStudentModel()
  }
}

export class DeleteStudentByIdRepositorySpy implements DeleteStudentByIdRepository {
  accountId: string
  id: string
  async deleteById (accountId: string, id: string): Promise<boolean> {
    this.accountId = accountId
    this.id = id
    return true
  }
}

export class LoadAllStudentsRepositorySpy implements LoadAllStudentsRepository {
  data: object
  async loadAllStudents (data: LoadAllStudentsParams): Promise<StudentModel[]> {
    this.data = data
    return mockStudentModelList()
  }
}

export class LoadStudentByIdRepositorySpy implements LoadStudentByIdRepository {
  data: string
  async loadById (id: string): Promise<StudentModel> {
    this.data = id
    return mockStudentModel()
  }
}