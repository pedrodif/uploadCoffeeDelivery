import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['white-base']};
`

export const FooterContainer = styled.div`
  align-items: flex-end;
`
