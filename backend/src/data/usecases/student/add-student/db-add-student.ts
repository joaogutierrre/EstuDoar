import { StudentModel } from './../../../../domain/model/student';
import { AddStudentRepository } from '../../../protocols/db/student/add-student-repository';
import { AddStudent, AddStudentParams } from './../../../../domain/usecases/student/add-student';

export class DbAddStudent implements AddStudent {
  constructor (
    private readonly addStudentRepository: AddStudentRepository
  ) {}

  async add (data: AddStudentParams): Promise<StudentModel> {
    const student = await this.addStudentRepository.add(data)
    return student
  }
}