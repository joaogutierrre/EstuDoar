import { MapModel } from "../../../../domain/model/map";

export interface LoadMapRepository {
    loadMap: (city: string) => Promise<MapModel[]>
}