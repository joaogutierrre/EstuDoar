import { StudentModel } from '../../model/student';

export interface LoadStudentsByAccount {
  load: (accountId: string) => Promise<StudentModel[]>
}