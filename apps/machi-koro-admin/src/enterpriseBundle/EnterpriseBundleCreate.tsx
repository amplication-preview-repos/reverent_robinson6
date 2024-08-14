import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const EnterpriseBundleCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="quantity" source="quantity" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
