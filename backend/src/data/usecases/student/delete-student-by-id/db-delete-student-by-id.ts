import { DeleteStudentByIdRepository } from './../../../protocols/db/student/delete-student-by-id-repository';
import { DeleteStudentById } from './../../../../domain/usecases/student/delete-student-by-id';

export class DbDeleteStudentById implements DeleteStudentById {
  constructor (
    private readonly deleteStudentByIdRepository: DeleteStudentByIdRepository
  ) {}

  async delete (accountId: string, id: string): Promise<boolean> {
    const wasDeleted = await this.deleteStudentByIdRepository.deleteById(accountId, id)
    return wasDeleted
  }
}