import { LoadStudentByIdRepository } from './../../protocols/db/student/load-student-by-id-repository';
import { DonateRepository } from './../../protocols/db/donation/donate-repository';
import { UpdateStudentByIdRepository } from './../../protocols/db/student/update-student-by-id-repository';
import { DonationModel } from './../../../domain/model/donation';
import { Donate, DonateParams } from './../../../domain/usecases/donation/donate';

export class DbDonate implements Donate {
  constructor (
    private readonly loadStudentByIdRepository: LoadStudentByIdRepository,
    private readonly updateStudentByIdRepository: UpdateStudentByIdRepository,
    private readonly donateRepository: DonateRepository
  ) {}

  async donate (data: DonateParams): Promise<DonationModel> {
    const student = await this.loadStudentByIdRepository.loadById(data.studentId)
    for (const item of student.items) {
      for (const donatedItem of data.items) {
        if (item.category === donatedItem.category) {
          if (item.donated + donatedItem.donated <= item.quantity) {
            item.donated += donatedItem.donated
          } else {
            return null
          }
        }
      }
    }
    await this.updateStudentByIdRepository.updateById(student)
    const donation = await this.donateRepository.donate(data)
    return donation
  }
}