import * as graphql from "@nestjs/graphql";
import { EnterpriseBundleResolverBase } from "./base/enterpriseBundle.resolver.base";
import { EnterpriseBundle } from "./base/EnterpriseBundle";
import { EnterpriseBundleService } from "./enterpriseBundle.service";

@graphql.Resolver(() => EnterpriseBundle)
export class EnterpriseBundleResolver extends EnterpriseBundleResolverBase {
  constructor(protected readonly service: EnterpriseBundleService) {
    super(service);
  }
}
