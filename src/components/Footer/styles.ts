// Packages
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100%;
  height: 8.5rem;
  background-color: ${(props) => props.theme['card-base']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const MediaContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  cursor: pointer;

  a {
    color: ${(props) => props.theme['base-text']};
  }
`

export const LogoBox = styled.div`
  cursor: pointer;
`
