// Components
import Logo from "../Logo";
import MapPin from "../MapPin";
import ShoppingCart from "../ShoppingCart";

// Styles
import { HeaderContainer, HeaderLocationBox, HeaderNavBox, HeaderShoppingBox } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderNavBox>
        <HeaderLocationBox>
          <MapPin />
          <span>Porto Alegre, RS</span>
        </HeaderLocationBox>
        <HeaderShoppingBox>
          <ShoppingCart />
        </HeaderShoppingBox>
      </HeaderNavBox>
    </HeaderContainer>

  )
}