import { SchoolsModel } from "../../domain/model/school";
import { mockSchoolsModel } from "../../domain/test/mock-school";
import { LoadSchoolsService } from "../protocols/service/load-school-service";

export class LoadSchoolsServiceSpy implements LoadSchoolsService {
    data: string
    result: object
    async loadSchools (city: string): Promise<SchoolsModel> {
        this.data = city
        return mockSchoolsModel()
    }
}