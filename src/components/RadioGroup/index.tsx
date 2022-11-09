// Packages
import { HTMLAttributes, ReactNode } from "react"

// Styles
import { RadioInput, RadioLabel, SectionContainer } from "./styles";

interface IdataProps {
  id: string;
  value: string;
  name: string;
}

interface IRadioGroupProps extends HTMLAttributes<HTMLElement> {
  data: IdataProps[];
  children?: ReactNode;
}

export function RadioGroup({ data }: IRadioGroupProps) {
  return (
    <>
      {data?.map(datum => {
        return(
          <SectionContainer
            key={datum.id}
          >
            <RadioInput
              type="radio"
              id={datum.id}
              name={datum.name}
              value={datum.value}
              onClick={() => console.log(datum.value)}
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
