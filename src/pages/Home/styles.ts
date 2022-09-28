import styled from 'styled-components'

export const CoffeesContainer = styled.section`
  width: 66rem;
  height: 100%;
  margin: 0 auto;
  margin-top: 3rem;
`

export const CoffeesContainerTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']}
`
