import { StudentModel } from './../../model/student';

export interface UpdateStudentById {
  update: (id: string) => Promise<StudentModel>
}