import { SubdistrictsModel } from './../../model/subdistrict';

export interface LoadSubdistricts {
    load: () => Promise<SubdistrictsModel>
}