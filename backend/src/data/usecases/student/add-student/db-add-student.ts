import { AddStudentRepository } from './../../../protocols/db/add-student-repository';
import { AddStudent, AddStudentParams } from './../../../../domain/usecases/student/add-student';

export class DbAddStudent implements AddStudent {
  constructor (
    private readonly addStudentRepository: AddStudentRepository
  ) {}

  async add (data: AddStudentParams): Promise<void> {
    await this.addStudentRepository.add(data)
    return null
  }
}