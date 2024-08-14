import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PlayerTitle } from "../player/PlayerTitle";

export const EnterpriseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="bundle" source="bundle" />
        <TextInput label="color" source="color" />
        <TextInput label="description" multiline source="description" />
        <NumberInput step={1} label="diceValue" source="diceValue" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="player.id" reference="Player" label="player">
          <SelectInput optionText={PlayerTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="price" source="price" />
        <NumberInput step={1} label="profit" source="profit" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Edit>
  );
};
