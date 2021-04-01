import { LoadAllStudentsRepository } from './../../../protocols/db/student/load-all-students-repository';
import { StudentModel } from './../../../../domain/model/student';
import { LoadAllStudents, LoadAllStudentsParams } from './../../../../domain/usecases/student/load-all-students';

export class DbLoadAllStudents implements LoadAllStudents {
  constructor (
    private readonly loadAllStudentsRepository: LoadAllStudentsRepository
  ) {}

  async load (data: LoadAllStudentsParams): Promise<StudentModel[]> {
    const students = await this.loadAllStudentsRepository.loadAllStudents(data)
    return students
  }
}