import styled from 'styled-components'

export const ButtonContainer = styled.button`
  height: 3.188rem;
  width: 11.167rem;
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

  &:active {
    border: 0.063rem solid ${(props) => props.theme['purple']};
  }
`