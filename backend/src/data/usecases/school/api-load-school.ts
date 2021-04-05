import { MapsModel } from "../../../domain/model/map"
import { LoadSchools } from "../../../domain/usecases/school/load-schools"
import { LoadSchoolService } from "../../protocols/service/load-school-service"
import { LoadMapRepository } from "../../protocols/db/map/load-map-repository"
import { SchoolsModel } from "../../../domain/model/school"

export class ApiLoadSchool implements LoadSchools {

    constructor(
        private readonly loadMapRepository: LoadMapRepository,
        private readonly loadSchoolService: LoadSchoolService
    ) { }

    async load(city: string): Promise<SchoolsModel> {
        const map = await this.loadMapRepository.loadMap()
        /*
        let result
        result = map.find(element => {
            if (city == element.cityCode) {
               return element.externalCityCode
            }
        })
        if(result == null){
            result = {}
        }
        const schoolsByCity = await this.loadSchoolService.loadSchool(result)
        return schoolsByCity
        */
       return null
    }
}