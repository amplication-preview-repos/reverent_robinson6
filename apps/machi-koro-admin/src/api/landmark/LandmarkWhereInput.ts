import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type LandmarkWhereInput = {
  bonus?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  player?: PlayerWhereUniqueInput;
  price?: IntNullableFilter;
};
