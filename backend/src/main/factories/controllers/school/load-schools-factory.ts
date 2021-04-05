import { LoadSchoolsController } from "../../../../presentation/controllers/school/load-schools-controller"
import { makeApiLoadSchools } from "../../usecases/school/api-load-schools-factory"

export const makeLoadSchoolsController = (): LoadSchoolsController => {
    const loadSchoolsController = new LoadSchoolsController(makeApiLoadSchools())
    return loadSchoolsController
  }