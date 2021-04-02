import { LoadAllStudentsRepository } from './../../../protocols/db/student/load-all-students-repository';
import { StudentModel } from './../../../../domain/model/student';
import { LoadAllStudents, LoadAllStudentsParams } from './../../../../domain/usecases/student/load-all-students';

export class DbLoadAllStudents implements LoadAllStudents {
  constructor (
    private readonly loadAllStudentsRepository: LoadAllStudentsRepository
  ) {}

  async load (data: LoadAllStudentsParams): Promise<StudentModel[]> {
    const students = await this.loadAllStudentsRepository.loadAllStudents(data)
    let filteredStudents = students ? students : [];
    if (data.uf) {
      filteredStudents = filteredStudents.filter((student) => student.uf === data.uf)
      if (data.city) {
        filteredStudents = filteredStudents.filter((student) => student.city === data.city)
        if (data.subDistrict && data.subDistrict != 'null') {
          filteredStudents = filteredStudents.filter((student) => student.subDistrict === data.subDistrict)
        }
        if (data.school) {
          filteredStudents = filteredStudents.filter((student) => student.school === data.school)
        }
      }
    }
    //console.log('FILTER => ' + JSON.stringify(filteredStudents))
    return filteredStudents
  }
}