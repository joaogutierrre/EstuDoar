import { StudentModel } from './../../model/student';

export type AddStudentParams = Omit<StudentModel, 'id'>

export interface AddStudent {
  add: (data: AddStudentParams) => Promise<StudentModel>
}