/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnterpriseBundleWhereInput } from "./EnterpriseBundleWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EnterpriseBundleListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EnterpriseBundleWhereInput,
  })
  @ValidateNested()
  @Type(() => EnterpriseBundleWhereInput)
  @IsOptional()
  @Field(() => EnterpriseBundleWhereInput, {
    nullable: true,
  })
  every?: EnterpriseBundleWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnterpriseBundleWhereInput,
  })
  @ValidateNested()
  @Type(() => EnterpriseBundleWhereInput)
  @IsOptional()
  @Field(() => EnterpriseBundleWhereInput, {
    nullable: true,
  })
  some?: EnterpriseBundleWhereInput;

  @ApiProperty({
    required: false,
    type: () => EnterpriseBundleWhereInput,
  })
  @ValidateNested()
  @Type(() => EnterpriseBundleWhereInput)
  @IsOptional()
  @Field(() => EnterpriseBundleWhereInput, {
    nullable: true,
  })
  none?: EnterpriseBundleWhereInput;
}
export { EnterpriseBundleListRelationFilter as EnterpriseBundleListRelationFilter };