import axios from "axios";
import { LoadSchoolService } from "../../../data/protocols/service/load-school-service";
import { SchoolsModel } from "../../../domain/model/school";

export class SchoolService implements LoadSchoolService{
    async loadSchool (city: string): Promise<SchoolsModel>{
        const response = await axios.get(`http://www.qedu.org.br/api/cities/${city}/schools/?limit=200&count=1`)
        return response.data
      }
}