// Packages
import { HTMLAttributes, ReactNode } from "react"

// Styles
import { RadioButtonWrapper } from "./styles";

import * as RadioGroup from '@radix-ui/react-radio-group';

interface IRadioRoot extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

function RadioRoot ({ children, ...props }: IRadioRoot ) {
  return (
    <div
      {...props}
    >
      {children}
    </div>
  )
}


export function RadioButton () {
  return (
    <RadioGroup.Root defaultValue="default">
      <RadioGroup.Item value="Cartão Crédito" id="credicard">
        <RadioGroup.Indicator />
      </RadioGroup.Item>
      <label htmlFor="credicard">Default</label>
    </RadioGroup.Root>
  )
}