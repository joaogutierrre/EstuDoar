import { Decrypter } from './../../../data/protocols/criptography/decrypter';
import { Encrypter } from './../../../data/protocols/criptography/encrypter';
import jsonwebtoken from 'jsonwebtoken'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor (
    private readonly secret: string
  ) {}

  async encrypt (data: string): Promise<string> {
    const accessToken = jsonwebtoken.sign({ id: data }, this.secret)
    return accessToken
  }

  async decrypt (token: string): Promise<string> {
    const value: any = await jsonwebtoken.verify(token, this.secret)
    return value
  }
}