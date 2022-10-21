import styled from 'styled-components'

export const CheckoutContainer = styled.section`
  width: 71rem;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 5rem;
  box-sizing: border-box;
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  gap: 3rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  box-sizing: border-box;
  border-radius: 0.375rem;
  background-color: ${(props) => props.theme['card-base']};
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.4);
`

export const FirstSection = styled(BaseSection)`
  width: 40rem;
  height: 23.25rem;
  padding: 2.5rem;
  margin-top: 0.625rem;
`

export const SecondSection = styled(BaseSection)`
  width: 40rem;
  height: 12.938rem;
  padding: 2.5rem;
`
// parei aqui
export const CheckoutPurchaseWrapper = styled(BaseSection)`
  width: 28rem;
  height: 100%;
  align-items: center;
  gap: 1.5rem;
  padding: 0 2.5rem;
  margin-top: 1.6rem;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;
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




