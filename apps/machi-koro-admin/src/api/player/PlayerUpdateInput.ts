import { EnterpriseUpdateManyWithoutPlayersInput } from "./EnterpriseUpdateManyWithoutPlayersInput";
import { LandmarkUpdateManyWithoutPlayersInput } from "./LandmarkUpdateManyWithoutPlayersInput";

export type PlayerUpdateInput = {
  balance?: number | null;
  companies?: EnterpriseUpdateManyWithoutPlayersInput;
  landmarks?: LandmarkUpdateManyWithoutPlayersInput;
  name?: string | null;
};
