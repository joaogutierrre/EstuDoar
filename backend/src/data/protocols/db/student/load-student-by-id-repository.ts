import { StudentModel } from "../../../../domain/model/student";

export interface LoadStudentByIdRepository {
  loadById: (id: string) => Promise<StudentModel>
}