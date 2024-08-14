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
import {
  IsInt,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsString,
  MaxLength,
} from "class-validator";
import { EnterpriseCreateNestedManyWithoutPlayersInput } from "./EnterpriseCreateNestedManyWithoutPlayersInput";
import { Type } from "class-transformer";
import { LandmarkCreateNestedManyWithoutPlayersInput } from "./LandmarkCreateNestedManyWithoutPlayersInput";

@InputType()
class PlayerCreateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  balance?: number | null;

  @ApiProperty({
    required: false,
    type: () => EnterpriseCreateNestedManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => EnterpriseCreateNestedManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => EnterpriseCreateNestedManyWithoutPlayersInput, {
    nullable: true,
  })
  companies?: EnterpriseCreateNestedManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    type: () => LandmarkCreateNestedManyWithoutPlayersInput,
  })
  @ValidateNested()
  @Type(() => LandmarkCreateNestedManyWithoutPlayersInput)
  @IsOptional()
  @Field(() => LandmarkCreateNestedManyWithoutPlayersInput, {
    nullable: true,
  })
  landmarks?: LandmarkCreateNestedManyWithoutPlayersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { PlayerCreateInput as PlayerCreateInput };