import { LoadMapRepository } from "../../../../data/protocols/db/map/load-map-repository";
import { MapModel } from "../../../../domain/model/map";
import { MongoHelper } from "../helpers/mongo-helper";

export class MapMongoRepository implements LoadMapRepository {
    async loadMap(): Promise<MapModel[]> {
        const mapCollection = await MongoHelper.getCollection('maps')
        const maps = await mapCollection.find().toArray()
        return MongoHelper.mapCollection(maps)
    }
}