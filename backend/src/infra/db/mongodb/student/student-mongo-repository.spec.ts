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
});