import { Validation } from './../protocols/validation';

export class ValidationSpy implements Validation {
  data: any
  result: any = null
  validate (data: any): Error {
    this.data = data
    return null
  }
}