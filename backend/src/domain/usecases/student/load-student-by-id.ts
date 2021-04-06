import { StudentModel } from './../../model/student';

export interface LoadStudentById {
  load: (id: string) => Promise<StudentModel>
} 