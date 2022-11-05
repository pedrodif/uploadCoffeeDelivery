// Packages
import { HTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

// Styles
import { SelectWrapper, SelectIconWrapper } from "./styles";

export interface ISelectRootProps extends HTMLAttributes<HTMLDivElement> {
  width?: string;
  height?: string;
  children: ReactNode;
  backgroundColor?: string;
}

function SelectRoot({ children }: ISelectRootProps) {
  return (
    <SelectWrapper>
      {children}
    </SelectWrapper>
  )
}

interface ISelectIconContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function SelectIconContainer({ children }:ISelectIconContainerProps) {
  return (
    <SelectIconWrapper>
      {children}
    </SelectIconWrapper>
  )
}

interface IOptionProps {
  id: string;
  value: string;
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  data: IOptionProps[];
}

function SelectContainer({ data }: ISelectProps) {
  return(
    <select>
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
    </select>
  )
}

export const Select = {
  Root: SelectRoot,
  Icon: SelectIconContainer,
  Main: SelectContainer,
}