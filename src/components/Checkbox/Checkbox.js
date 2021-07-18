import React from "react";
import {
  DivFormControl,
  DivCheckbox
} from "./Styled";

export default function Checkbox({
  options,
  onChange
}) {
  return (
    <DivFormControl>
      {
        options.map((option) => {
          return (<DivCheckbox>
            <input name={option.value} 
              id={option.value} 
              type="checkbox"
              onChange={onChange} />
            <label for={option.value}>{option.text}</label>
          </DivCheckbox>)
        })
      }

    </DivFormControl>
  );
}
