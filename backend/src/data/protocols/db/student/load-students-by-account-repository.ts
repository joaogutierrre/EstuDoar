import { StudentModel } from './../../../../domain/model/student';
export interface LoadStudentsByAccountRepository {
  loadStudentsByAccount: (accountId: string) => Promise<StudentModel[]>
}