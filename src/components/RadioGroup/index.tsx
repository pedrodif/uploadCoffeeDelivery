// Packages
import { HTMLAttributes, ReactNode } from "react"

// Styles
import { RadioInput, RadioLabel, SectionContainer } from "./styles";

interface IdataProps {
  id: string;
  value: string;
  name: string;
}

interface IRadioGroupProps  extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  data: IdataProps[];
}

export function RadioGroup({ data }: IRadioGroupProps) {
  return (
    <>
      {data?.map(datum => {
        return(
          <SectionContainer>
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
