import styled from 'styled-components'

export const InputContainer = styled.input`
  width: ${(props) => props.width ? props.width : 'auto'};
  height: 2.625rem;
  padding: 0.75rem;
  border: 0.063rem solid ${(props => props.theme['base-button'])};
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};

  &::placeholder {
    font-size: 0.813rem;
  }
`
