import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type EnterpriseUpdateInput = {
  bundle?: string | null;
  color?: string | null;
  description?: string | null;
  diceValue?: number | null;
  name?: string | null;
  player?: PlayerWhereUniqueInput | null;
  price?: number | null;
  profit?: number | null;
  typeField?: string | null;
};
