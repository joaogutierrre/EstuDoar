import { Hasher } from './../protocols/criptography/hasher';

export class HasherSpy implements Hasher {
  data: string
  result: string = 'hashed_password'
  async hash (data: string): Promise<string> {
    this.data = data
    return this.result
  }
}