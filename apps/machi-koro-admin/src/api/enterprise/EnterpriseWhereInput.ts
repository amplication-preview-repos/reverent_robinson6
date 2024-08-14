import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type EnterpriseWhereInput = {
  bundle?: StringNullableFilter;
  color?: StringNullableFilter;
  description?: StringNullableFilter;
  diceValue?: IntNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  player?: PlayerWhereUniqueInput;
  price?: IntNullableFilter;
  profit?: IntNullableFilter;
  typeField?: StringNullableFilter;
};
