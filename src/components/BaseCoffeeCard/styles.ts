
// Packages
import styled from 'styled-components'

export const CoffeesCard = styled.section`
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
// provisional solution
margin-top: 80px;
margin-bottom: 20px;
background-color: ${(props) => props.theme['card-base']};
/* z-index: 0; */
`
export const CoffeesCardImg = styled.section`
width: 120px;
height: 120px;
margin: 0 auto;
margin-top: -30px;
/* z-index: 1; */
`

