import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  margin: 0 auto;
  width: 71rem;
  height: 71rem;
  box-sizing: border-box;
  border: 3px solid black;
`

export const FormFirstSection = styled.section`
  width: 640px;
  height:372px;
  border-radius: 6px;
  padding: 40px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme['card-base']};
`
export const Row = styled.div`
  display: flex;
  gap: 0.8rem;
`
export const SectionHeader = styled.div`
  display: flex;
  gap: 0.4rem;
`
export const HeaderText = styled.div`
  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const FormTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`