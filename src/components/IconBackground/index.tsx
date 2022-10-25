// Packages
import { ReactNode } from "react";

// Styles
import { IconBackgroundContainer } from "./styles";

export interface IIconBackgroundProps {
  children: ReactNode;
  backgroundColor?: string;
  width?: string;
  height?: string;
}

export function IconBackground({ children, ...props }: IIconBackgroundProps) {
  return(
    <IconBackgroundContainer
      {...props}
    >
      {children}
    </IconBackgroundContainer>
  )
}