// Packages
import { HTMLAttributes, ReactNode, useState } from "react"

// Styles
import { RadioInput, RadioLabel, SectionContainer } from "./styles";

interface IdataProps {
  id: string;
  value: string;
  name: string;
}

export interface IRadioGroupProps extends HTMLAttributes<HTMLElement> {
  data?: IdataProps[];
  children?: ReactNode;
}

export function RadioGroup({ data,...props }: IRadioGroupProps) {
  return (
    <>
      {data?.map(datum => {
        return(
          <SectionContainer
            key={datum.id}
            {...props}
          >
            <RadioInput
              type="radio"
              id={datum.id}
              name={datum.name}
              value={datum.value}
            />
            <RadioLabel
              htmlFor={datum.id}
            >
              {datum.value}
            </RadioLabel>
          </SectionContainer>
        )
      })}
    </>
  )
}
