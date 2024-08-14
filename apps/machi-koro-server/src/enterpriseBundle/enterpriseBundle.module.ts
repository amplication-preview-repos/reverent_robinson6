import { Module } from "@nestjs/common";
import { EnterpriseBundleModuleBase } from "./base/enterpriseBundle.module.base";
import { EnterpriseBundleService } from "./enterpriseBundle.service";
import { EnterpriseBundleController } from "./enterpriseBundle.controller";
import { EnterpriseBundleResolver } from "./enterpriseBundle.resolver";

@Module({
  imports: [EnterpriseBundleModuleBase],
  controllers: [EnterpriseBundleController],
  providers: [EnterpriseBundleService, EnterpriseBundleResolver],
  exports: [EnterpriseBundleService],
})
export class EnterpriseBundleModule {}
