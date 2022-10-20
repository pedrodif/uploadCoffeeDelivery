// Packages
import styled from 'styled-components'

// Types
import { IButtonProps } from '.'

export const ButtonContainer = styled.button<IButtonProps>`
  width: ${(props) => props.width ? props.width : '11.167rem'};
  height: ${(props) => props.height ? props.height : '3.188rem'};
  box-sizing: border-box;
  border: none;
  border-radius: 0.375rem;
  font-size: 0.75rem;
  background-color: ${(props) => props.color ? props.color : '#EBE5F9'};
  color: ${(props) => props.color ? props.color : '#574F4D'};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    border: 0.063rem solid ${(props) => props.theme['purple']};
  }
`