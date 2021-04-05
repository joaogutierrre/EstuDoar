import { SchoolsModel } from '../../model/school';

export interface LoadSchools {
    load: (city: string) => Promise<SchoolsModel>
}