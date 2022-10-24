// Packages
import { ReactNode } from "react";

// Styles
import { IconBackgroundContainer } from "./styles";

export interface IIconBackgroundProps {
  children: ReactNode;
  backgroundColor?: string;
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