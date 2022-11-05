// Packages
import { ReactNode, SelectHTMLAttributes } from "react";

// Styles
import { SelectContainer } from "./styles";

interface IOptionProps {
  id: string;
  value: string;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  data?: IOptionProps[];
  children?: ReactNode;
  backgroundColor?: string;
  width?: string;
  height?: string;
}

export function Select({ data, children, ...props }: ISelectProps) {
  return(
    <SelectContainer
      {...props}
    >
      {children}
      {data?.map(option => {
        return (
          <option
            key={option.id}
            value={option.value}
          >
            {option.value}
          </option>
        )
      })}
    </SelectContainer>
  )
}