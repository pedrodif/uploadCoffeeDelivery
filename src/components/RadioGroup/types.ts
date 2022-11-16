// Packages
import { HTMLAttributes, ReactNode } from "react";

export interface IIconWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

interface IDataProps {
  id: string;
  value: string;
  name: string;
  icon: string;
}

export interface IRadioGroupProps extends HTMLAttributes<HTMLElement> {
  data?: IDataProps[];
}