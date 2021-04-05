import { MapModel } from "../../domain/model/map";
import { LoadMapRepository } from "../protocols/db/map/load-map-repository";

export class LoadMapsRepositorySpy implements LoadMapRepository {
    data: string
    result: object
    async loadMap(city: string): Promise<MapModel[]> {
        const fakeMap =
            [{
                id: 'any_id',
                cityCode: 'any_code',
                externalCityCode: 'any_xternal_code'
            }, {
                id: 'other_id',
                cityCode: 'other_code',
                externalCityCode: 'other_xternal_code'
            }]
        this.result = fakeMap
        return fakeMap
    }
}