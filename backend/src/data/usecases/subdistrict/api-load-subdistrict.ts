import { SubdistrictsModel } from "../../../domain/model/subdistrict"
import { LoadSubdistricts } from "../../../domain/usecases/subdistricts/load-subdistricts"
import { LoadSubdistrictRepository } from "../../protocols/service/load-subdistrict-repository"

export class ApiLoadSubdistrict implements LoadSubdistricts {

    constructor(
        private readonly loadSubdistrictRepository: LoadSubdistrictRepository
    ) { }

    async load(city: string): Promise<SubdistrictsModel> {
        const subdistricts = await this.loadSubdistrictRepository.loadSubdistrict(city)
        if (subdistricts) {
            return { subdistricts }
        }
        return null
    }

}