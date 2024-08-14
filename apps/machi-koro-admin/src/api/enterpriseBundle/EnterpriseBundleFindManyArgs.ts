import { EnterpriseBundleWhereInput } from "./EnterpriseBundleWhereInput";
import { EnterpriseBundleOrderByInput } from "./EnterpriseBundleOrderByInput";

export type EnterpriseBundleFindManyArgs = {
  where?: EnterpriseBundleWhereInput;
  orderBy?: Array<EnterpriseBundleOrderByInput>;
  skip?: number;
  take?: number;
};
