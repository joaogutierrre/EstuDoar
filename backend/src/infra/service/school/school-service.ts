import axios from "axios";
import { LoadSchoolService } from "../../../data/protocols/service/load-school-service";
import { SchoolsModel } from "../../../domain/model/school";

export class SchoolService implements LoadSchoolService{
  async loadSchool (city: string): Promise<any>{
    const response = await axios.get(`http://www.qedu.org.br/api/cities/${city}/schools?limit=200000`)
    return response.data
  }
}