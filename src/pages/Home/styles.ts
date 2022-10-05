import styled from 'styled-components'

export const MenuContainer = styled.section`
  width: 66rem;
  height: 100%;
  margin: 0 auto;
  margin-top: 3rem;
`

export const CardsLayout = styled.div`
  width: 66rem;
  height: 355rem;
  /* align-items: center; */
  justify-content: space-between;
  margin-bottom: 6rem;
  box-sizing: border-box;
  border: 3px solid black;
`

export const MenuTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
`
