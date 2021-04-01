import { SubdistrictModel } from "../../../../domain/model/subdistrict";

export interface LoadSubdistrictRepository {
    loadSubdistrict: () => Promise<SubdistrictModel[]>
}