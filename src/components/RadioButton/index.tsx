// Packages
import { HTMLAttributes, ReactNode } from "react"

// Styles
import { RadioButtonWrapper } from "./styles";

import { Check } from "phosphor-react";


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


export function RadioButton ({ ...props }: IRadioGroupProps) {


}