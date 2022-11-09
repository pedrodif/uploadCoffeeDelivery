// Packages
import { HTMLAttributes, ReactNode, useState } from "react"

// Components
import { Bank, CreditCard, Money } from "phosphor-react";

// Styles
import { RadioInput, RadioLabel, SectionContainer } from "./styles";

interface IdataProps {
  id: string;
  value: string;
  name: string;
  icon: string;
}

export interface IRadioGroupProps extends HTMLAttributes<HTMLElement> {
  data?: IdataProps[];
  icon: (icon: string) => void;
}

export function RadioGroup({ data, icon, ...props }: IRadioGroupProps) {
  return (
    <>
      {data?.map(datum => {
        return(
          <SectionContainer
            key={datum.id}
            {...props}
          >
            {icon(datum.icon)}

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
