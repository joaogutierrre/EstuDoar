export interface DeleteStudentById {
  delete: (accountId: string, id: string) => Promise<boolean>
}