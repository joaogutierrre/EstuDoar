import { ApiLoadSchool } from "../../../../data/usecases/subdistrict/api-load-school";
import { LoadSchools } from "../../../../domain/usecases/school/load-schools";
import { MapMongoRepository } from "../../../../infra/db/mongodb/map/map-mongo-repository";
import { SchoolService } from "../../../../infra/service/school/school-service";

export const makeApiLoadSchools = (): LoadSchools =>{
    const loadMapsRepository = new MapMongoRepository()
    const loadSchoolService = new SchoolService()
    return new ApiLoadSchool(loadMapsRepository ,loadSchoolService)
} 