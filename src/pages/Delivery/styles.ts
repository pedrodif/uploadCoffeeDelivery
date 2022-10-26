// Packages
import styled from 'styled-components';

export const DeliveryContainer = styled.div`
  width: 71rem;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 5rem;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const DeliveryTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: 800;
  color: ${(props) => props.theme['yellow-dark']};
`

const InformationBaseBox = styled.div`
  display: flex;
  border-radius: 0.375rem;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;
`

export const DeliveryInformationGradientWrapper = styled(InformationBaseBox)`
  width: 33rem;
  height: 17rem;
  margin-top: 2.188rem;
  margin-bottom: 2.188rem;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(0.25turn, #DBAC2C, #8047f8);
`

export const DeliveryInformation = styled(InformationBaseBox)`
  width: 32.875rem;
  height: 16.875rem;
  padding: 2.5rem;
  flex-direction: column;
  gap: 2rem;
  background-color: ${(props) => props.theme['white-base']};
`

const DeliveryBoxBaseStyle = styled.div`
  width: 23.125rem;
  height: 2.625rem;
  line-height: 1.3rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme['base-text']};
`

export const AddressInformation = styled(DeliveryBoxBaseStyle)`
  section {
    width: 19.375rem;
  }
`
export const TimeInformation = styled(DeliveryBoxBaseStyle)`
  section {
    width: 10.438rem;

  }
`
export const PaymentInformation = styled(DeliveryBoxBaseStyle)`
  section {
    width: 12rem;
  }
`
