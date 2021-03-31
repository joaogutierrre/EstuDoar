import { StudentModel } from './../../../../domain/model/student';
import { UpdateStudentParams } from './../../../../domain/usecases/student/update-student-by-id';

export interface UpdateStudentByIdRepository {
  updateById: (data: UpdateStudentParams) => Promise<StudentModel>
}