import { Enterprise } from "../enterprise/Enterprise";
import { Landmark } from "../landmark/Landmark";

export type Player = {
  balance: number | null;
  companies?: Array<Enterprise>;
  createdAt: Date;
  id: string;
  landmarks?: Array<Landmark>;
  name: string | null;
  updatedAt: Date;
};
