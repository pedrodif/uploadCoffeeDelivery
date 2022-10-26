// Packages
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  width: 100%;
  height: 6.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30rem;
  background-color: ${(props) => props.theme['card-base']};
  top: 0;
  left: 0;
`

export const LogoBox = styled.div`
  cursor: pointer;
`

export const HeaderNavBox = styled.div`
  width: 13.5rem;
  display: flex;
  flex-direction: row;
  gap: 0.938rem;
`
