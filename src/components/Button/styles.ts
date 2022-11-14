// Packages
import styled from 'styled-components';

// Types
import { IButtonProps } from '.'

export const ButtonContainer = styled.button<IButtonProps>`
  box-sizing: border-box;
  border: none;
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: ${(props) => props.padding ? props.padding : '0'};
  width: ${(props) => props.width ? props.width : '11.167rem'};
  height: ${(props) => props.height ? props.height : '3.188rem'};
  font-size: ${(props) => props.fontSize? props.fontSize : '0.75rem'};
  font-weight: ${(props) => props.weight ? props.weight : '400'};
  color: ${(props) => props.color ? props.color : '#574F4D'};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#EBE5F9'};

  &:hover {
    border: 0.063rem solid ${(props) => props.theme['purple']};
  }
`