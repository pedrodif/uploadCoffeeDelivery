// Packages
import styled from 'styled-components';


export const RadioInput = styled.input`
  /* display: none; */
`

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: ${(props) => props.theme['base-text']};
  cursor: pointer;
  text-transform: uppercase;

  /* &::before {
    content: '';
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    width: 11.167rem;
    height: 3.188rem;
    box-sizing: border-box;
    margin-right: 10px;
    transition: 0.2s ease-in-out;
    background-color: transparent;
    overflow: hidden;
  } */

  /* #radio:checked + &::before {
    border: 2px solid pink;
  } */
`

export const SectionContainer = styled.section`
  box-sizing: border-box;
  width: 11.167rem;
  height: 3.188rem;
  padding: 0;
  border: none;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['purple-light']};
  overflow: hidden;
`