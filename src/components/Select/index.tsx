// Packages
import { HTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

// Styles
import { SelectWrapper, SelectIconWrapper, SelectMain } from "./styles";

// Types
import { ISelectIconContainerProps, ISelectProps, ISelectRootProps } from "./types";


function SelectRoot({ children, ...props }: ISelectRootProps) {
  return (
    <SelectWrapper
      {...props}
    >
      {children}
    </SelectWrapper>
  )
}

function SelectIconContainer({ children }:ISelectIconContainerProps) {
  return (
    <SelectIconWrapper>
      {children}
    </SelectIconWrapper>
  )
}

function SelectContainer({ data, ...props }: ISelectProps) {
  return(
    <SelectMain
      {...props}
    >
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
    </SelectMain>
  )
}

export const Select = {
  Root: SelectRoot,
  Icon: SelectIconContainer,
  Main: SelectContainer,
}