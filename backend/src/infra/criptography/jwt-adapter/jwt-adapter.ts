import { Encrypter } from './../../../data/protocols/criptography/encrypter';
import jsonwebtoken from 'jsonwebtoken'

export class JwtAdapter implements Encrypter {
  constructor (
    private readonly secret: string
  ) {}

  async encrypt (data: string): Promise<string> {
    const accessToken = jsonwebtoken.sign({ id: data }, this.secret)
    return accessToken
  }
}