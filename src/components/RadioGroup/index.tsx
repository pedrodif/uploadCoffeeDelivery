// Packages
import { useState } from "react"

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
  // States
  const [ idToSearch, setidToSearch] = useState<string>()
  const [ isBorderShown, setIsBorderShown] = useState<boolean>(false)

  if (idToSearch) {
    const sectionWrapper = document.getElementById(idToSearch);
    if (isBorderShown && sectionWrapper) {
      sectionWrapper.style.borderStyle = 'solid';
      sectionWrapper.style.borderWidth = '1px';
      sectionWrapper.style.borderColor  = '#8047F8';
    }
  }

  // Functions
  function hanldeClick(id: string) {
    setIsBorderShown(true);
    setidToSearch(id);
  }

  // Render
  return (
    <>
      {data?.map(datum => {
        return(
          <SectionContainer
            {...props}
            // id={datum.id}
            key={datum.id}
            // onClick={() => hanldeClick(datum.id)}
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
