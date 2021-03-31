import { mockAddStudentParams, mockStudentModel } from './../../../../domain/test/mock-student';
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
      expect(student.about).toBe(studentParams.about)
      expect(student.image).toBe(studentParams.image)
      expect(student.items[0].category).toBe(studentParams.items[0].category)
      expect(student.items[0].quantity).toBe(studentParams.items[0].quantity)
      expect(student.items[0].donated).toBe(studentParams.items[0].donated)
      expect(student.items[1].category).toBe(studentParams.items[1].category)
      expect(student.items[1].quantity).toBe(studentParams.items[1].quantity)
      expect(student.items[1].donated).toBe(studentParams.items[1].donated)
    })
  });

  describe('loadStudentsByAccount()', () => {
    test('should return all students from an account', async () => {
      await studentCollection.insertMany([{
        accountId: 'any_id',
        name: 'any_name',
        school: 'any_school',
        about: 'any_about',
        image: 'any_image',
        items: [{
          category: 'any_category',
          quantity: 1,
          donated: 0
        }, {
          category: 'any_category',
          quantity: 2,
          donated: 0
        }]
      }, {
        accountId: 'any_id',
        name: 'other_name',
        school: 'other_school',
        about: 'other_about',
        image: 'other_image',
        items: [{
          category: 'other_category',
          quantity: 1,
          donated: 0
        }, {
          category: 'other_category',
          quantity: 2,
          donated: 0
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

  describe('updateById()', () => {
    test('should return an student on updateById success', async () => {
      const { sut } = makeSut()
      const student = await sut.add(mockAddStudentParams())
      student.name = 'new_name'
      const updatedStudent = await sut.updateById(student)
      expect(updatedStudent).toBeTruthy()
      expect(updatedStudent.name).toBe('new_name')
    });

    test('should return null on updateById fails', async () => {
      const { sut } = makeSut()
      const updatedStudent = await sut.updateById(mockStudentModel())
      expect(updatedStudent).toBe(null)
    });
  });
});