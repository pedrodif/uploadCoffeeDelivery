// Packages
import styled from 'styled-components';

// Types
import { IRadioGroupProps } from './types';


export const RadioInput = styled.input`
  display: none;
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  text-transform: uppercase;
`

export const SectionContainer = styled.section<IRadioGroupProps>`
  box-sizing: border-box;
  width: 11.167rem;
  height: 3.188rem;
  padding: 0;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['purple-light']};
  transition: 0.3s ease-in-out;
`

