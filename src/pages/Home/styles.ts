import styled from 'styled-components'

export const MenuContainer = styled.section`
  width: 71rem;
  height: 100%;
  margin: 0 auto;
  margin-top: 3rem;
`

export const CardsLayout = styled.div`
  width: 71rem;
  height: 90rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const MenuTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']};
  margin-left: 2.5rem;
`
