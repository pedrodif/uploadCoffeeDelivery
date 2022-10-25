import styled from 'styled-components'

export const DeliveryContainer = styled.div`
  width: 71rem;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  gap: 5rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
`

export const DeliveryTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['yellow-dark']};
`

export const DeliveryInformation = styled.div`
  width: 526px;
  height: 270px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 35px;
  margin-bottom: 35px;
  border-radius: 0.375rem;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;
  position: relative;
  $border: 5px;
  border: solid $border transparent;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom left, #DBAC2C, #8047F8);
    z-index: -1;
    margin: -6px;
    border-radius: 0.375rem;
    border-top-right-radius: 2.25rem;
    border-bottom-left-radius: 2.25rem;
  }

`

const DeliveryBoxBaseStyle = styled.div`
  width: 370px;
  height: 42px;
  line-height: 20.8px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 1rem;
`

export const AddressInformation = styled(DeliveryBoxBaseStyle)`
  p {
    width: 310px;

  }
`
export const TimeInformation = styled(DeliveryBoxBaseStyle)`
  p {
    width: 160px;
  }
`
export const PaymentInformation = styled(DeliveryBoxBaseStyle)`
  p {
    width: 192px;
  }
`
export const DeliveryImageWrapper = styled.div`
  margin-top: 148px;
`

