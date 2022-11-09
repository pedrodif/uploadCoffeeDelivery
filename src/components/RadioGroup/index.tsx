// Packages
import { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react"

// Styles
import { RadioInput, RadioLabel, SectionContainer } from "./styles";


interface IRadioRoot extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

function RadioRoot({ children, ...props }: IRadioRoot) {
  return (
    <SectionContainer

      {...props}
    >
      {children}
    </SectionContainer>
  )
}

export interface IRadioGroup extends LabelHTMLAttributes<HTMLLabelElement> {
  content?: string;
}

function RadioGroup (props: IRadioGroup) {
  return(
    <>
      <RadioInput type="radio" id="radio" value="Opção 1" name="radioGroup"/>
      <RadioLabel htmlFor="radio" {...props}></RadioLabel>
    </>

  )
}

export const Radio = {
  Root: RadioRoot,
  Group: RadioGroup,
}

