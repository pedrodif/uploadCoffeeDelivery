// Packages
import { HTMLAttributes, ReactNode, useState } from "react"

// Components
import { Bank, CreditCard, Money } from "phosphor-react";

// Styles
import { RadioInput, RadioLabel, SectionContainer } from "./styles";

// Types
import { IIconWrapperProps, IRadioGroupProps } from "./types";

// Functions
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

// Components
function IconWrapper({ children }: IIconWrapperProps) {
  return (
    <div>
      {children}
    </div>
  )
}

export function RadioGroup({ data, ...props }: IRadioGroupProps) {
  // Render
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
