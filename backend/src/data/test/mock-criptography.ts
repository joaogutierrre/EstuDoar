import { Hasher } from './../protocols/criptography/hasher';

export class HasherSpy implements Hasher {
  value: string
  result: string = 'hashed_password'
  async hash (value: string): Promise<string> {
    this.value = value
    return this.result
  }
}