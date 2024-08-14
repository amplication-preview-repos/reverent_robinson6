import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type EnterpriseBundleWhereInput = {
  id?: StringFilter;
  quantity?: IntNullableFilter;
  typeField?: StringNullableFilter;
};
