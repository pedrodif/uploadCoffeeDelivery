// Packages
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild, ...props }: IButtonProps) {
  const Component = asChild ? Slot : 'button';

  return(
    <Component
      {...props}
    >
      {children}
    </Component>
  )
}