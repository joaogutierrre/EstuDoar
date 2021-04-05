import { MapsModel } from "../model/map";

export const mockMapsModel = (): MapsModel => ({
    maps: [{
        id: 'any_id',
        cityCode: 'any_code',
        externalCityCode: 'any_xternal_code'
    }, {
        id: 'other_id',
        cityCode: 'other_code',
        externalCityCode: 'other_xternal_code'
    }]
})