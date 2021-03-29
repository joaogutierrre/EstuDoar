import { LoadStudentsByAccountRepository } from '../../../protocols/db/student/load-students-by-account-repository';
import { LoadStudentsByAccount } from '../../../../domain/usecases/student/load-students-by-account';
import { StudentModel } from '../../../../domain/model/student';

export class DbLoadStudentsByAccount implements LoadStudentsByAccount {
  constructor (
    private readonly LoadStudentsByAccountRepository: LoadStudentsByAccountRepository
  ) {}

  async load (accountId: string): Promise<StudentModel[]> {
    const students = await this.LoadStudentsByAccountRepository.loadStudentsByAccount(accountId)
    return students
  }
}