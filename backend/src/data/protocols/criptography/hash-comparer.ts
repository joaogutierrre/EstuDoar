export interface HashComparer {
  compare: (data: string, hash: string) => Promise<boolean>
}