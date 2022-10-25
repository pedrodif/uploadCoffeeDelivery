// Packages
import styled from 'styled-components';

export const CardContainer = styled.section`
  width: 16rem;
  height: 19.375rem;
  margin-top: 3.125rem;
  margin-bottom: 1.25rem;
  margin-right: 1.55rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  border-top-left-radius: 0.375rem;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;
  border-bottom-right-radius: 0.375rem;
  background-color: ${(props) => props.theme['card-base']};
  box-sizing: border-box;
  box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.4);
`

export const CardImageWrapper = styled.div`
  width: 7.5rem;
  height: 7.5rem;
  margin: 0 auto;
  margin-top: -1.875rem;
`

export const CardIngredientsWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
`

export const Ingredients = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.25rem;
  height: 1.563rem;
  font-size: 0.625rem;
  font-weight: 700;
  border-radius: 6.25rem;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
`

export const CardTitle = styled.strong`
  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.625rem;
  margin-bottom: 0.625rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CardDescriptionWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 216px;
  height: 36px;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 30px;
  color: ${(props) => props.theme['base-label']};
`

export const CardShoppingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13.438rem;
  height: 2.375rem;
  margin: 0 auto;
  margin-bottom: 1.563rem;
`

export const CardAmountWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.188rem;
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 0.375rem;
  color: ${(props) => props.theme['base-title']};
  background-color:${(props) => props.theme['base-button']};
`

export const CardBillWrapper = styled.p`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.125rem;
  font-size: 1rem;
  color:${(props) => props.theme['base-text']};
`

export const CardBillValue = styled.span`
  font-size: 1.563rem;
  font-family: 'Baloo 2';
`

export const CardShopppingButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['purple-dark']};
`

