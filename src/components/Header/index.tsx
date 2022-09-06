// Components
import Logo from "../Logo";
import { ShoppingCart, MapPin } from 'phosphor-react'

// Styles
import { HeaderContainer, HeaderLocationBox, HeaderRightBox, HeaderShoppingBox } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderRightBox>
        <HeaderLocationBox>
          <MapPin />
          <span>Porto Alegre, RS</span>
        </HeaderLocationBox>
        <HeaderShoppingBox>
          <ShoppingCart />
        </HeaderShoppingBox>
      </HeaderRightBox>
    </HeaderContainer>

  )
}