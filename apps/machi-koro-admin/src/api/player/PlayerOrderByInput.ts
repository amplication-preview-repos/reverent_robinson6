import { SortOrder } from "../../util/SortOrder";

export type PlayerOrderByInput = {
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
