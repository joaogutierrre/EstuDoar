import { SubdistrictsModel } from "../../../domain/model/subdistrict"
import { LoadSubdistricts } from "../../../domain/usecases/subdistricts/load-subdistricts"
import { LoadSubdistrictRepository } from "../../protocols/db/subdistrict/load-subdistrict-repository"

export class ApiLoadSubdistrict implements LoadSubdistricts {

    constructor(
        private readonly loadSubdistrictRepository: LoadSubdistrictRepository
    ) { }

    async load(): Promise<SubdistrictsModel> {
        const subdistricts = await this.loadSubdistrictRepository.loadSubdistrict()
        if (subdistricts) {
            return { subdistricts }
        }
        return null
    }

}