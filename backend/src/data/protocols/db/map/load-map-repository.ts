import { MapModel } from "../../../../domain/model/map";

export interface LoadMapRepository {
    loadMap: () => Promise<MapModel[]>
}