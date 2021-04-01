import { StudentModel } from './../../model/student';

export type LoadAllStudentsParams = {
  uf?: string
  city?: string
  subDistrict?: string
  school?: string
}

export interface LoadAllStudents {
  load: (loadAllStudentsParams: LoadAllStudentsParams) => Promise<StudentModel[]>
}