import { SchoolsModel } from "../../domain/model/school";
import { mockSchoolsModel } from "../../domain/test/mock-school";
import { LoadSchoolService } from "../protocols/service/load-school-service";

export class LoadSchoolServiceSpy implements LoadSchoolService {
    data: string
    result: object
    async loadSchool (city: string): Promise<SchoolsModel> {
        this.data = city
        return mockSchoolsModel()
    }
}