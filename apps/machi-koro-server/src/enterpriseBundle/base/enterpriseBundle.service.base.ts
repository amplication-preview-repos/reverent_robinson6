/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  EnterpriseBundle as PrismaEnterpriseBundle,
} from "@prisma/client";

export class EnterpriseBundleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.EnterpriseBundleCountArgs, "select">
  ): Promise<number> {
    return this.prisma.enterpriseBundle.count(args);
  }

  async enterpriseBundles(
    args: Prisma.EnterpriseBundleFindManyArgs
  ): Promise<PrismaEnterpriseBundle[]> {
    return this.prisma.enterpriseBundle.findMany(args);
  }
  async enterpriseBundle(
    args: Prisma.EnterpriseBundleFindUniqueArgs
  ): Promise<PrismaEnterpriseBundle | null> {
    return this.prisma.enterpriseBundle.findUnique(args);
  }
  async createEnterpriseBundle(
    args: Prisma.EnterpriseBundleCreateArgs
  ): Promise<PrismaEnterpriseBundle> {
    return this.prisma.enterpriseBundle.create(args);
  }
  async updateEnterpriseBundle(
    args: Prisma.EnterpriseBundleUpdateArgs
  ): Promise<PrismaEnterpriseBundle> {
    return this.prisma.enterpriseBundle.update(args);
  }
  async deleteEnterpriseBundle(
    args: Prisma.EnterpriseBundleDeleteArgs
  ): Promise<PrismaEnterpriseBundle> {
    return this.prisma.enterpriseBundle.delete(args);
  }
}
