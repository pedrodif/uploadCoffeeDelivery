// Packages
import { HTMLAttributes, ReactNode } from "react"

// Styles
import { RadioInput, RadioLabel, sectionContainer } from "./styles";


interface IRadioRoot extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

function RadioRoot({ children, ...props }: IRadioRoot) {
  return (
    <sectionContainer
      {...props}
    >
      {children}
    </sectionContainer>
  )
}


export function RadioGroup() {
  return(
    <>
      <RadioInput type="radio" id="radio" value="Opção 1" />
      <RadioLabel htmlFor="radio">Opção 1</RadioLabel>
    </>

  )
}