// Packages
import styled from 'styled-components';

export const CoffeeSelectedCard = styled.div`
  width: 23rem;
  height: 6.25rem;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  gap: 2rem;
  border-bottom: 0.063rem solid ${(props) => props.theme['base-button']};
`

export const ImageWrapper = styled.div`
  width: 4.375rem;
  height: 4.375rem;
  margin: 0 auto;
`

export const ImageStyle = styled.img`
  width: 4rem;
  height: 4rem;
`

export const FormInsideOrganizerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PurchaseInformation = styled(FormInsideOrganizerWrapper)`
  justify-content: center;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  gap: 0.8rem;
`

export const AmountWrapper = styled.div`
  width: 4.5rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.188rem;
  color: ${(props) => props.theme['base-title']};
  background-color:${(props) => props.theme['base-button']};
`

export const BillWrapper = styled.p`
  width: 5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.125rem;
  font-size: 1rem;
  font-weight: 800;
  color:${(props) => props.theme['base-text']};
`


export const BillInformationWrapper = styled.div`
  width: 21.75rem;
  height: 1.313rem;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  color: ${(props) => props.theme['base-text']};
`

export const FinalAmount = styled(BillInformationWrapper)`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
`
