import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EnterpriseBundleServiceBase } from "./base/enterpriseBundle.service.base";

@Injectable()
export class EnterpriseBundleService extends EnterpriseBundleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
