import React, { useState } from "react";
import {
  Input,
  Label,
  IconPassword,
  FormControl,
  DivInput,
  MsgError,
  DivFormControl,
} from "./Styled";
import { ReactComponent as Password } from "../../assets/eye_hide_off.svg";
import { ReactComponent as Password2 } from "../../assets/eye_on_see.svg";

export default function FormPropsTextFields({
  label,
  placeholder,
  value,
  onChange,
  type,
  name,
  error,
  required
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <DivFormControl>
      <FormControl className={error ? "Error" : ""}>
        <DivInput>
          <Input
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            name={name}
            onChange={onChange}
            id={name}
            value={value}
          />

          {type === "password" && (
            <IconPassword>
              {showPassword ? (
                <Password2 onClick={() => setShowPassword(!showPassword)} />
              ) : (
                <Password onClick={() => setShowPassword(!showPassword)} />
              )}
            </IconPassword>
          )}
        </DivInput>
        <Label for={name}>
          {label}
          {required && "*"}
        </Label>
      </FormControl>
      <MsgError>{error}</MsgError>
    </DivFormControl>
  );
}
