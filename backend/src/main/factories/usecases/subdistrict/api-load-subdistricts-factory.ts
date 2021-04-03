import { ApiLoadSubdistrict } from "../../../../data/usecases/subdistrict/api-load-subdistrict";
import { LoadSubdistricts } from "../../../../domain/usecases/subdistricts/load-subdistricts";
import { LocalityService } from "../../../../infra/service/locality/locality-service"

export const makeApiLoadSubdistricts = (): LoadSubdistricts =>{
    const loadSubdistrictsService = new LocalityService()
    return new ApiLoadSubdistrict(loadSubdistrictsService)
}