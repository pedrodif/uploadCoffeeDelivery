// Packages
import styled from 'styled-components';

// Types
import { ISelectProps, ISelectRootProps } from './types';

export const SelectWrapper = styled.div<ISelectRootProps>`
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  padding: 0.5rem;
  font-weight: 400;
  width: 11rem;
  height: ${(props) => props.height ? props.height : '2.375rem'};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#EBE5F9'};

  &:hover {
    border: 0.063rem solid ${(props) => props.theme['purple']};
  }
`

export const SelectIconWrapper = styled.div`
  width: 1rem;
  height: 1.25rem;
`

export const SelectMain = styled.select<ISelectProps>`
  box-sizing: border-box;
  width: ${(props) => props.width ? props.width : '8.938rem'};
  height: 1.25rem;
  border: none;
  font-size: 0.875rem;
  color: ${(props) => props.color ? props.color : '#4B2995'};
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : '#EBE5F9'};
  padding-left: 0.313rem;


`