import { MongoHelper } from './../helpers/mongo-helper';
import { AddStudentParams } from './../../../../domain/usecases/student/add-student';
import { StudentModel } from './../../../../domain/model/student';
import { AddStudentRepository } from '../../../../data/protocols/db/student/add-student-repository';

export class StudentMongoRepository implements AddStudentRepository {
  async add (data: AddStudentParams): Promise<StudentModel> {
    const studentCollection = await MongoHelper.getCollection('students')
    const result = await studentCollection.insertOne(data)
    const student = result.ops[0]
    return MongoHelper.map(student)
  }
}