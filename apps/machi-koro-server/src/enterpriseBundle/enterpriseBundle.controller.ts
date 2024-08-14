import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EnterpriseBundleService } from "./enterpriseBundle.service";
import { EnterpriseBundleControllerBase } from "./base/enterpriseBundle.controller.base";

@swagger.ApiTags("enterpriseBundles")
@common.Controller("enterpriseBundles")
export class EnterpriseBundleController extends EnterpriseBundleControllerBase {
  constructor(protected readonly service: EnterpriseBundleService) {
    super(service);
  }
}
