import { LoadStudentByIdRepository } from './../../../protocols/db/student/load-student-by-id-repository';
import { StudentModel } from './../../../../domain/model/student';
import { LoadStudentById } from './../../../../domain/usecases/student/load-student-by-id';

export class DbLoadStudentById implements LoadStudentById {
  constructor (
    private readonly loadStudentByIdRepository: LoadStudentByIdRepository
  ) {}

  async load (id: string): Promise<StudentModel> {
    await this.loadStudentByIdRepository.loadById(id)
    return null
  }
}