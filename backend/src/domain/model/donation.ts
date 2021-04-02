import { ItemModel } from './student';

export type DonationModel = {
  id: string
  type: string
  donatorId: string
  accountId: string
  studentId: string
  items: DonationItemModel[]
}

export type DonationItemModel = {
  category: string
  donated: number
}