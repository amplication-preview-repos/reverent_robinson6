import { EnterpriseBundle as TEnterpriseBundle } from "../api/enterpriseBundle/EnterpriseBundle";

export const ENTERPRISEBUNDLE_TITLE_FIELD = "typeField";

export const EnterpriseBundleTitle = (record: TEnterpriseBundle): string => {
  return record.typeField?.toString() || String(record.id);
};
