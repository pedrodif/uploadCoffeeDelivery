// Packages
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

// Styles
import { ButtonContainer } from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  width?: string;
  height?: string;
  backgroundColor?: string;
  weight?: string;
}

export function Button({ children, asChild, ...props }: IButtonProps) {
  const Component = asChild ? Slot : 'button';

  return(
    <ButtonContainer
      {...props}
    >
      {children}
    </ButtonContainer>
  )
}



