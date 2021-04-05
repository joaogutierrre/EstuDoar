import axios from "axios";
import { LoadSchoolsService } from "../../../data/protocols/service/load-school-service";
import { SchoolsModel } from "../../../domain/model/school";

export class SchoolService implements LoadSchoolsService{
  async loadSchools (city: string): Promise<any>{
    const response = await axios.get(`http://www.qedu.org.br/api/cities/${city}/schools?limit=200000`)
    return response.data
  }
}