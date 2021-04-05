import { SchoolsModel } from "../../domain/model/school";
import { mockSchoolsModel } from "../../domain/test/mock-school";
import { LoadSchools } from "../../domain/usecases/school/load-schools";

export class LoadSchoolsSpy implements LoadSchools{
    data: string
    async load (city:string): Promise<SchoolsModel>{
        this.data = city
        return mockSchoolsModel()
    }
}