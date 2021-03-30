import { mockAddStudentParams } from './../../../../domain/test/mock-student';
import { StudentMongoRepository } from './student-mongo-repository';
import { MongoHelper } from './../helpers/mongo-helper';
import { Collection } from "mongodb";

type SutTypes = {
  sut: StudentMongoRepository
}

const makeSut = (): SutTypes => {
  const sut = new StudentMongoRepository()
  return {
    sut
  }
}

let studentCollection: Collection

describe('StudentMongoRepository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    studentCollection = await MongoHelper.getCollection('students')
    await studentCollection.deleteMany({})
  })

  describe('add()', () => {
    test('should return an account on add success', async () => {
      const { sut } = makeSut()
      const studentParams = mockAddStudentParams()
      const student = await sut.add(studentParams)
      expect(student).toBeTruthy()
      expect(student.id).toBeTruthy()
      expect(student.accountId).toBe(studentParams.accountId)
      expect(student.name).toBe(studentParams.name)
      expect(student.school).toBe(studentParams.school)
      expect(student.items[0].category).toBe(studentParams.items[0].category)
      expect(student.items[0].quantity).toBe(studentParams.items[0].quantity)
      expect(student.items[1].category).toBe(studentParams.items[1].category)
      expect(student.items[1].quantity).toBe(studentParams.items[1].quantity)
    })
  });

  describe('loadStudentsByAccount()', () => {
    test('should return all students from an account', async () => {
      await studentCollection.insertMany([{
        accountId: 'any_id',
        name: 'any_name',
        school: 'any_school',
        items: [{
          category: 'any_category',
          quantity: 'any_quantity'
        }, {
          category: 'any_category',
          quantity: 'any_quantity'
        }]
      }, {
        accountId: 'any_id',
        name: 'other_name',
        school: 'other_school',
        items: [{
          category: 'other_category',
          quantity: 'other_quantity'
        }, {
          category: 'other_category',
          quantity: 'other_quantity'
        }]
      }])
      const { sut } = makeSut()
      const students = await sut.loadStudentsByAccount('any_id')
      expect(students.length).toBe(2)
      expect(students[0].id).toBeTruthy()
      expect(students[0].name).toBe('any_name')
      expect(students[1].id).toBeTruthy()
      expect(students[1].name).toBe('other_name')
    });

    test('should return an empty list', async () => {
      const { sut } = makeSut()
      const students = await sut.loadStudentsByAccount('any_id')
      expect(students.length).toBe(0)
    });
  });
});