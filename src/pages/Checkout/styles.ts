import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  margin: 0 auto;
  width: 71rem;
  box-sizing: border-box;
  margin-top: 2rem;
  margin-bottom: 5rem;
`

export const FormInsideOrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const FormTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-weight: 700;
  color: ${(props) => props.theme['base-subtitle']};
`

const BaseSection = styled.div`
  width: 40rem;
  border-radius: 0.375rem;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => props.theme['card-base']};
`

export const FirstSection = styled(BaseSection)`
  height: 23.25rem;
  margin-top: 0.625rem;
`
export const SecondSection = styled(BaseSection)`
  height: 12.938rem;
`

export const Row = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const SectionHeader = styled.div`
  display: flex;
  gap: 0.4rem;
  margin-bottom: 1rem;
`

export const HeaderText = styled.div`
 display: flex;
 flex-direction: column;
 gap: 0.5rem;

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
  }

  p {
    color: ${(props) => props.theme['base-text']};
    font-size: 0.875rem;
  }
`

export const PaymentMethodWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

