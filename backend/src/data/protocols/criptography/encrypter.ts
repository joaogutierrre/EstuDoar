export interface Encrypter {
  encrypt: (data: string) => Promise<string>
}