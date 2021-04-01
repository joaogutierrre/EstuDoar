import { DeleteStudentByIdRepository } from './../../../protocols/db/student/delete-student-by-id-repository';
import { DeleteStudentById } from './../../../../domain/usecases/student/delete-student-by-id';

export class DbDeleteStudentById implements DeleteStudentById {
  constructor (
    private readonly deleteStudentByIdRepository: DeleteStudentByIdRepository
  ) {}

  async delete (accountId: string, id: string): Promise<void> {
    await this.deleteStudentByIdRepository.deleteById(accountId, id)
    return null
  }
}