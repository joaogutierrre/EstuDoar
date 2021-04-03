import { LoadAllStudentsParams } from './../usecases/student/load-all-students';
import { StudentModel } from './../model/student';
import { AddStudentParams } from './../usecases/student/add-student';

export const mockAddStudentParams = (): AddStudentParams => ({
  accountId: 'any_id',
  name: 'any_name',
  uf: 'any_uf',
  city: 'any_city',
  school: 'any_school',
  about: 'any_about',
  image: 'any_image',
  items: mockItems()
})

export const mockStudentModel = (): StudentModel => ({
  id: '6064b768ae8209001434d737',
  accountId: 'any_id',
  name: 'any_name',
  uf: 'any_uf',
  city: 'any_city',
  school: 'any_school',
  about: 'any_about',
  image: 'any_image',
  items: mockItems()
})

const mockItems = (): any => {
  return [{
    category: 'any_category',
    quantity: 1,
    donated: 0
  }, {
    category: 'other_category',
    quantity: 2,
    donated: 0
  }]
}

export const mockStudentModelList = (): StudentModel[] => ([
  mockStudentModel(), 
  mockStudentModel()
])

export const mockLoadAllStudentsParams = (): LoadAllStudentsParams => ({
  uf: 'any_uf',
  city: 'any_city',
  school: 'any_school'
})
