import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme['white-base']};
  display: flex;
  flex-direction: column;
`
