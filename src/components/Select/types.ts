import { HTMLAttributes, ReactNode, SelectHTMLAttributes } from "react";

export interface ISelectRootProps extends HTMLAttributes<HTMLDivElement> {
  height?: string;
  children: ReactNode;
  backgroundColor?: string;
}

export interface ISelectIconContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface IOptionProps {
  id: string;
  value: string;
}

export interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  data?: IOptionProps[];
  width?: string;
  backgroundColor?: string;
}