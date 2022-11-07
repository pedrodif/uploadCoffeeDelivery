// Packages
import { HTMLAttributes, ReactNode } from "react"

// Styles
import { RadioButtonWrapper } from "./styles";

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
    <RadioButtonWrapper>
      <label htmlFor="radio">
        Teste
      <input type="radio" id="radio" name="radio" value="Teste" />
      </label>
      <section>
        <span></span>
      </section>
    </RadioButtonWrapper>
  )
}