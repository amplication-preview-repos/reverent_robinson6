import { Player } from "../player/Player";

export type Landmark = {
  bonus: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  player?: Player | null;
  price: number | null;
  updatedAt: Date;
};
