import { LoadStudentsByAccountRepository } from './../../../../data/protocols/db/student/load-students-by-account-repository';
import { MongoHelper } from './../helpers/mongo-helper';
import { AddStudentParams } from './../../../../domain/usecases/student/add-student';
import { StudentModel } from './../../../../domain/model/student';
import { AddStudentRepository } from '../../../../data/protocols/db/student/add-student-repository';

export class StudentMongoRepository implements AddStudentRepository, LoadStudentsByAccountRepository {
  async add (data: AddStudentParams): Promise<StudentModel> {
    const studentCollection = await MongoHelper.getCollection('students')
    const result = await studentCollection.insertOne(data)
    const student = result.ops[0]
    return MongoHelper.map(student)
  }

  async loadStudentsByAccount (accountId: string): Promise<StudentModel[]> {
    const studentCollection = await MongoHelper.getCollection('students')
    const students = await studentCollection.find({
      accountId: accountId
    })
    .toArray()
    return students && MongoHelper.mapCollection(students)
  }
}