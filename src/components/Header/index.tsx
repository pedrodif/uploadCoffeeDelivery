// Packages
import { MapPin, ShoppingCart } from "phosphor-react";

// Components
import { Logo } from "../Logo";

// Styles
import {
  HeaderContainer,
  HeaderLocationBox,
  HeaderNavBox,
  HeaderShoppingBox
} from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderNavBox>
        <HeaderLocationBox
          type="button"
        >
          <MapPin color="#8047F8" weight="fill" size={23} />
          Porto Alegre, RS
        </HeaderLocationBox>

        <HeaderShoppingBox
          type="button"
        >
          <ShoppingCart color="#C47F17" weight="fill" size={23}/>
        </HeaderShoppingBox>
      </HeaderNavBox>
    </HeaderContainer>

  )
}