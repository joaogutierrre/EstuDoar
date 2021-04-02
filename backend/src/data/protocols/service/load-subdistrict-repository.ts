import { SubdistrictModel } from "../../../domain/model/subdistrict";

export interface LoadSubdistrictRepository {
    loadSubdistrict: (city: string) => Promise<SubdistrictModel[]>
}