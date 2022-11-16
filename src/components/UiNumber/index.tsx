
// Packages
import numeral from "numeral";
import { HTMLAttributes, ReactNode } from "react";

interface IUiNumber extends HTMLAttributes<HTMLSpanElement> {
  format: string;
  children: ReactNode;
}

export function UiNumber({ format, children }:IUiNumber) {
  return(
    <span>
      {numeral(children).format(format)}
    </span>
  )
}