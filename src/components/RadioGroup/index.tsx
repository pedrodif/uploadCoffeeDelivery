// Packages
import { HTMLAttributes, ReactNode, useState } from "react"

// Components
import { Bank, CreditCard, Money } from "phosphor-react";

// Styles
import { RadioInput, RadioLabel, SectionContainer } from "./styles";

const handleIcon = (icon: string) => {
  if (icon === "money") {
    return (
      <Money
        color="#8047F8"
        size={18}
      />
    )
  }

  if (icon === "creditCard") {
    return  (
      <CreditCard
        color="#8047F8"
        size={18}
      />
    )
  }

  return (
    <Bank
      color="#8047F8"
      size={18}
    />
  )
}

interface IIconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

function IconWrapper({ children }: IIconWrapperProps) {
  return (
    <div>
      {children}
    </div>
  )
}

interface IdataProps {
  id: string;
  value: string;
  name: string;
  icon: string;
}

export interface IRadioGroupProps extends HTMLAttributes<HTMLElement> {
  data?: IdataProps[];
}

export function RadioGroup({ data, ...props }: IRadioGroupProps) {
  return (
    <>
      {data?.map(datum => {
        return(
          <SectionContainer
            key={datum.id}
            {...props}
          >
            <IconWrapper>
              {handleIcon(datum.icon)}
            </IconWrapper>

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
