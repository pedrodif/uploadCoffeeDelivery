// Packages
import { MapPin, ShoppingCart } from "phosphor-react";

// Components
import { Logo } from "../Logo";

// Styles
import {
  HeaderContainer,
  HeaderNavBox,
  HeaderLocationButton,
  HeaderShoppingButton
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderNavBox>
        <HeaderLocationButton
          type="button"
        >
          <MapPin color="#8047F8" weight="fill" size={23} />
          Porto Alegre, RS
        </HeaderLocationButton>

        <HeaderShoppingButton
          type="button"
        >
          <ShoppingCart color="#C47F17" weight="fill" size={23}/>
        </HeaderShoppingButton>
      </HeaderNavBox>
    </HeaderContainer>

  )
}