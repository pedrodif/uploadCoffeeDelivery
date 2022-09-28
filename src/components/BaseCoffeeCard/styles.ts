
// Packages
import styled from 'styled-components'

export const CardContainer = styled.section`
box-sizing: border-box;
width: 16rem;
height: 19.375rem;
display: flex;
flex-direction: column;
text-align: center;
border-top-left-radius: 6px;
border-top-right-radius: 36px;
border-bottom-left-radius: 36px;
border-bottom-right-radius: 6px;
background-color: ${(props) => props.theme['card-base']};
z-index: 0;
// provisional solution
margin-top: 50px;
margin-bottom: 20px;
`

export const CardImageWrapper = styled.div`
width: 120px;
height: 120px;
margin: 0 auto;
margin-top: -30px;
z-index: 1;
`

export const CardIngredientsWrapper = styled.div`
width: 90%;
height: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
gap: 6px;
`

export const Ingredients = styled.p`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 25px;
font-size: 10px;
font-weight: 700;
border-radius: 100px;
color: ${(props) => props.theme['yellow-dark']};
background-color: ${(props) => props.theme['yellow-light']};
`

export const CardTitle = styled.strong`
font-family: 'Baloo 2';
font-size: 20px;
font-weight: 700;
line-height: 26px;
margin-bottom: 10px;
color: ${(props) => props.theme['base-subtitle']};
`

export const CardDescriptionWrapper = styled.text`
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
width: 215px;
height: 38px;
margin: 0 auto;
margin-bottom: 25px;
`

export const CardAmountWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 3px;
width: 72px;
height: 38px;
border-radius: 6px;
color: ${(props) => props.theme['base-title']};
background-color:${(props) => props.theme['base-button']};
`

export const CardBillWrapper = styled.p`
display: flex;
flex-direction: row;
align-items: center;
gap: 2px;
font-size: 16px;
color:${(props) => props.theme['base-text']};
`
export const CardBillValue = styled.span`
font-size: 25px;
font-family: 'Baloo 2';

`
export const CardShopppingButton = styled.button`
width: 38px;
height: 38px;
border: none;
border-radius: 6px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${(props) => props.theme['purple-dark']};
`

