import { Decrypter } from './../protocols/criptography/decrypter';
import { Encrypter } from './../protocols/criptography/encrypter';
import { HashComparer } from './../protocols/criptography/hash-comparer';
import { Hasher } from './../protocols/criptography/hasher';

export class HasherSpy implements Hasher {
  data: string
  result: string = 'hashed_password'
  async hash (data: string): Promise<string> {
    this.data = data
    return this.result
  }
}

export class HashComparerSpy implements HashComparer {
  data: string
  hash: string
  result: boolean = true
  async compare (data: string, hash: string): Promise<boolean> {
    this.data = data
    this.hash = hash
    return this.result
  }
}

export class EncrypterSpy implements Encrypter {
  data: string
  result: string = 'any_token'
  async encrypt (data: string): Promise<string> {
    this.data = data
    return this.result
  }
}

export class DecrypterSpy implements Decrypter {
  data: string
  result:string = 'any_value'
  async decrypt (data: string): Promise<string> {
    this.data = data
    return this.result
  }
}