import { StudentModel } from './../../../domain/model/student';
import { AddStudentParams } from './../../../domain/usecases/student/add-student';

export interface AddStudentRepository {
  add: (data: AddStudentParams) => Promise<StudentModel>
}