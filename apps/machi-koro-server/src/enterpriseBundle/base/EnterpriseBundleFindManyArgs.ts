/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnterpriseBundleWhereInput } from "./EnterpriseBundleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { EnterpriseBundleOrderByInput } from "./EnterpriseBundleOrderByInput";

@ArgsType()
class EnterpriseBundleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => EnterpriseBundleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => EnterpriseBundleWhereInput, { nullable: true })
  @Type(() => EnterpriseBundleWhereInput)
  where?: EnterpriseBundleWhereInput;

  @ApiProperty({
    required: false,
    type: [EnterpriseBundleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [EnterpriseBundleOrderByInput], { nullable: true })
  @Type(() => EnterpriseBundleOrderByInput)
  orderBy?: Array<EnterpriseBundleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { EnterpriseBundleFindManyArgs as EnterpriseBundleFindManyArgs };
