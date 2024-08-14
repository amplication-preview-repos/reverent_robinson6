import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EnterpriseListRelationFilter } from "../enterprise/EnterpriseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LandmarkListRelationFilter } from "../landmark/LandmarkListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PlayerWhereInput = {
  balance?: IntNullableFilter;
  companies?: EnterpriseListRelationFilter;
  id?: StringFilter;
  landmarks?: LandmarkListRelationFilter;
  name?: StringNullableFilter;
};
