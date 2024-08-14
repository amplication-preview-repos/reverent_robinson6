/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { EnterpriseBundleService } from "../enterpriseBundle.service";
import { EnterpriseBundleCreateInput } from "./EnterpriseBundleCreateInput";
import { EnterpriseBundle } from "./EnterpriseBundle";
import { EnterpriseBundleFindManyArgs } from "./EnterpriseBundleFindManyArgs";
import { EnterpriseBundleWhereUniqueInput } from "./EnterpriseBundleWhereUniqueInput";
import { EnterpriseBundleUpdateInput } from "./EnterpriseBundleUpdateInput";

export class EnterpriseBundleControllerBase {
  constructor(protected readonly service: EnterpriseBundleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: EnterpriseBundle })
  async createEnterpriseBundle(
    @common.Body() data: EnterpriseBundleCreateInput
  ): Promise<EnterpriseBundle> {
    return await this.service.createEnterpriseBundle({
      data: data,
      select: {
        createdAt: true,
        id: true,
        quantity: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [EnterpriseBundle] })
  @ApiNestedQuery(EnterpriseBundleFindManyArgs)
  async enterpriseBundles(
    @common.Req() request: Request
  ): Promise<EnterpriseBundle[]> {
    const args = plainToClass(EnterpriseBundleFindManyArgs, request.query);
    return this.service.enterpriseBundles({
      ...args,
      select: {
        createdAt: true,
        id: true,
        quantity: true,
        typeField: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: EnterpriseBundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async enterpriseBundle(
    @common.Param() params: EnterpriseBundleWhereUniqueInput
  ): Promise<EnterpriseBundle | null> {
    const result = await this.service.enterpriseBundle({
      where: params,
      select: {
        createdAt: true,
        id: true,
        quantity: true,
        typeField: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: EnterpriseBundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateEnterpriseBundle(
    @common.Param() params: EnterpriseBundleWhereUniqueInput,
    @common.Body() data: EnterpriseBundleUpdateInput
  ): Promise<EnterpriseBundle | null> {
    try {
      return await this.service.updateEnterpriseBundle({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          quantity: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: EnterpriseBundle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteEnterpriseBundle(
    @common.Param() params: EnterpriseBundleWhereUniqueInput
  ): Promise<EnterpriseBundle | null> {
    try {
      return await this.service.deleteEnterpriseBundle({
        where: params,
        select: {
          createdAt: true,
          id: true,
          quantity: true,
          typeField: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}