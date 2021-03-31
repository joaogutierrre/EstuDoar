import { UpdateStudentsByIdRepositorySpy } from './../../../test/mock-db-student';
import { StudentModel } from './../../../../domain/model/student';
import { UpdateStudentById, UpdateStudentParams } from './../../../../domain/usecases/student/update-student-by-id';

export class DbUpdateStudentById implements UpdateStudentById {
  constructor (
    private readonly updateStudentsByIdRepository: UpdateStudentsByIdRepositorySpy
  ) {}

  async update (data: UpdateStudentParams): Promise<StudentModel> {
    await this.updateStudentsByIdRepository.updateById(data)
    return null
  }
}