import React, { useState } from "react";
import {
  FormControl,
  MsgError,
  DivFormControl,
} from "./Styled";

export default function Select({
  label,
  options,
  error,
  onChange,
  name,
  value
}) {
  return (
    <DivFormControl>
      <FormControl className={error ? "Error" : ""}>
        {label}
        <select onChange={onChange} name={name} value={value} required>
        (<option value="">Nenhum</option>)
          {options.map((option) => {
            return (<option value={option.value}>{option.text}</option>)
          })}
        </select>
      </FormControl>
      <MsgError>{error}</MsgError>
    </DivFormControl>
  );
}
