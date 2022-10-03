import styled from 'styled-components'

export const MenuContainer = styled.section`
  width: 66rem;
  height: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
`

export const CardsLayout = styled.div`
  display: block;
  width: 66rem;
  height: 100%;
  margin-top: 3rem;
  margin-bottom: 3rem;
  box-sizing: border-box;
`

export const MenuTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['base-subtitle']}
`
