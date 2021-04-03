import { LoadSubdistrictsController } from "../../../../presentation/controllers/locality/subdistricts/load-subdistricts-controller"
import { makeApiLoadSubdistricts } from "../../usecases/subdistrict/api-load-subdistricts-factory"

export const makeSubdistrictsController = (): LoadSubdistrictsController => {
    const loadSubdistrictsController = new LoadSubdistrictsController(makeApiLoadSubdistricts())
    return loadSubdistrictsController
  }