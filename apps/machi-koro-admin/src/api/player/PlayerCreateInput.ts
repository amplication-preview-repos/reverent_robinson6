import { EnterpriseCreateNestedManyWithoutPlayersInput } from "./EnterpriseCreateNestedManyWithoutPlayersInput";
import { LandmarkCreateNestedManyWithoutPlayersInput } from "./LandmarkCreateNestedManyWithoutPlayersInput";

export type PlayerCreateInput = {
  balance?: number | null;
  companies?: EnterpriseCreateNestedManyWithoutPlayersInput;
  landmarks?: LandmarkCreateNestedManyWithoutPlayersInput;
  name?: string | null;
};
