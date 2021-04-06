import { StudentModel } from './../../model/student';

export type UpdateStudentParams = StudentModel

export interface UpdateStudentById {
  update: (data: UpdateStudentParams) => Promise<StudentModel>
}