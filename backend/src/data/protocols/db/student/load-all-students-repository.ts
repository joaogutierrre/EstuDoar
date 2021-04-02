import { StudentModel } from './../../../../domain/model/student';
import { LoadAllStudentsParams } from './../../../../domain/usecases/student/load-all-students';

export interface LoadAllStudentsRepository {
  loadAllStudents: (data: LoadAllStudentsParams) => Promise<StudentModel[]>
}