import { SchoolsModel } from "../../../domain/model/school";

export interface LoadSchoolService {
    loadSchool: (city: string) => Promise<SchoolsModel>
}