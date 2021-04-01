export interface DeleteStudentByIdRepository {
  deleteById: (accountId: string, id: string) => Promise<void>
}