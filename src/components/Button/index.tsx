// Packages
import { Slot } from '@radix-ui/react-slot';
import { ButtonHTMLAttributes, ReactNode } from 'react';

// Styles
import { ButtonContainer } from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  width?: string;
  height?: string;
  weight?: string;
  asChild?: boolean;
  children: ReactNode;
  backgroundColor?: string;
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



