// Packages
import { InputHTMLAttributes } from "react";

// Styles
import { InputContainer } from "./styles";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input(props: IInputProps) {
  return (
    <InputContainer
      {...props}
    />
  )
}