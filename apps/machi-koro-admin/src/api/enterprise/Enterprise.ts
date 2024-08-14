import { Player } from "../player/Player";

export type Enterprise = {
  bundle: string | null;
  color: string | null;
  createdAt: Date;
  description: string | null;
  diceValue: number | null;
  id: string;
  name: string | null;
  player?: Player | null;
  price: number | null;
  profit: number | null;
  typeField: string | null;
  updatedAt: Date;
};
