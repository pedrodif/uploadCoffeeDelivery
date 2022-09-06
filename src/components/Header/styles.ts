import styled from 'styled-components'

export const HeaderContainer = styled.header`
width: 100%;
height: 6.5rem;
display: flex;
justify-content: space-around;
align-items: center;
`

export const HeaderNavBox = styled.div`
width: 12.5rem;
display: flex;
flex-direction: row;
gap: 0.938rem;
`

const BaseBox = styled.div`
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
border-radius: 0.375rem;
line-height: 130%;
`

export const HeaderLocationBox = styled(BaseBox)`
width: 9.563rem;
height: 2.375rem;
gap: 0.25rem;
font-size: 0.875rem;
font-weight: 400;
color: ${(props) => props.theme['purple-dark']};
background-color: ${(props) => props.theme['purple-light']};
`
export const HeaderShoppingBox = styled(BaseBox)`
width: 2.375rem;
height: 2.375rem;
padding: 0.5rem;
color: ${(props) => props.theme['yellow-dark']};
background-color: ${(props) => props.theme['yellow-light']};
`