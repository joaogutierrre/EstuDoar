import { SubdistrictsModel } from './../../model/subdistrict';

export interface LoadSubdistricts {
    load: (city: string) => Promise<SubdistrictsModel>
}