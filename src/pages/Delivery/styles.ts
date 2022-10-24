import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  width: 71rem;
  height: 100vh;
  margin: 0 auto;
  box-sizing: border-box;
  border: 1px solid black;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 6rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
`

export const DeliveryTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['yellow-dark']};
`

