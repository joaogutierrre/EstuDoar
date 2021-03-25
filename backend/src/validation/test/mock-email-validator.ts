import { EmailValidator } from './../protocols/email-validator';

export class EmailValidatorSpy implements EmailValidator {
  data: string
  result: boolean = true
  isValid (email: string): boolean {
    return this.result
  }
}