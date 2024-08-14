import { PlayerWhereUniqueInput } from "../player/PlayerWhereUniqueInput";

export type LandmarkUpdateInput = {
  bonus?: string | null;
  description?: string | null;
  name?: string | null;
  player?: PlayerWhereUniqueInput | null;
  price?: number | null;
};
