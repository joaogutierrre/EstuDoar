import { SubdistrictModel } from "../../domain/model/subdistrict";
import { LoadSubdistrictRepository } from "../protocols/service/load-subdistrict-repository";

export class LoadSubdistrictRepositorySpy implements LoadSubdistrictRepository{
    data: string
    result: object
    async loadSubdistrict(): Promise<SubdistrictModel[]>{
        const fakeSubdistrict = [{
            id: 'any_id',
            code: 'any_code',
            name: 'any_name'
        },{
            id: 'other_id',
            code: 'other_code',
            name: 'other_name'
        }]
        this.result = fakeSubdistrict
        return fakeSubdistrict
    }
}