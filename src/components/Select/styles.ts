// Packages
import styled from 'styled-components';

// Types
import { ISelectProps } from '.';

export const SelectContainer = styled.select<ISelectProps>`
  box-sizing: border-box;
  cursor: pointer;
  border: none;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0;
  font-size: 0.75rem;
  font-weight: 400;
  width: ${(props) => props.width ? props.width : '8.938rem'};
  height: ${(props) => props.height ? props.height : '2.375rem'};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#EBE5F9'};
  color: ${(props) => props.color ? props.color : '#574F4D'};

  &:hover {
    border: 0.063rem solid ${(props) => props.theme['purple']};
  }
`