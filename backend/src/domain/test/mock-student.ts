import { StudentModel } from './../model/student';
import { AddStudentParams } from './../usecases/student/add-student';

export const mockAddStudentParams = (): AddStudentParams => ({
  accountId: 'any_id',
  name: 'any_name',
  school: 'any_school',
  items: mockItems()
})

export const mockStudentModel = (): StudentModel => ({
  id: 'any_id',
  accountId: 'any_id',
  name: 'any_name',
  school: 'any_school',
  items: mockItems()
})

const mockItems = (): any => {
  return [{
    category: 'any_category',
    quantity: 1
  }, {
    category: 'other_category',
    quantity: 2
  }]
}
