// Packages
import styled from 'styled-components'

// Types
import { IIconBackgroundProps } from '.'

export const IconBackgroundContainer = styled.div<IIconBackgroundProps>`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#FAFAFA'};
`
