import React from "react";
import {
  DivFormControl,
  DivCheckbox,
  H3,
  Label,
  DivCheckboxes
} from "./Styled";

export default function Checkbox({
  options,
  form,
  onChange,
  title,
  prefix
}) {
  return (
    <DivFormControl>
      <H3>{title}</H3>
      <DivCheckboxes>

      {
        options.map(({value, text}) => 
        {
        const idComplete = prefix+value;
          return (<DivCheckbox>
            <input name={idComplete} 
              id={idComplete} 
              type="checkbox"
              onChange={onChange} />
            <Label for={idComplete} checked={form[idComplete]}>{text}</Label>
          </DivCheckbox>)
        })
      }
      </DivCheckboxes>

    </DivFormControl>
  );
}
