import { SchoolsModel } from "../../../domain/model/school";

export interface LoadSchoolsService {
    loadSchools: (city: string) => Promise<SchoolsModel>
}