import { UpdateStudentParams } from './../../../../domain/usecases/student/update-student-by-id';
import { LoadStudentsByAccountRepository } from './../../../../data/protocols/db/student/load-students-by-account-repository';
import { MongoHelper } from './../helpers/mongo-helper';
import { AddStudentParams } from './../../../../domain/usecases/student/add-student';
import { StudentModel } from './../../../../domain/model/student';
import { AddStudentRepository } from '../../../../data/protocols/db/student/add-student-repository';
import { ObjectId } from 'bson';

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
    return MongoHelper.mapCollection(students)
  }

  async updateById (data: UpdateStudentParams): Promise<StudentModel> {
    const studentCollection = await MongoHelper.getCollection('students')
    const student = await studentCollection.findOneAndUpdate({
      _id: new ObjectId(data.id),
      accountId: data.accountId
    }, {
      $set: {
        name: data.name,
        school: data.school,
        about: data.about,
        image: data.image,
        items: data.items
      }
    }, {
      returnOriginal: false
    })
    return student.value ? MongoHelper.map(student.value) : null
  }
}