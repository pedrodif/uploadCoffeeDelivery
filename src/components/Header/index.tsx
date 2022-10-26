// Packages
import { MapPin, ShoppingCart } from "phosphor-react";

// Components
import { Logo } from "../Logo";
import { Button } from "../Button";

// Styles
import {
  HeaderNavBox,
  HeaderContainer,
} from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <HeaderNavBox>
        <Button
          type="button"
          width="9.5rem"
          height="2.375rem"
          color="#4B2995"
          fontSize="0.875rem"
        >
          <MapPin
            color="#8047F8"
            weight="fill"
            size={23}
          />
          Porto Alegre, RS
        </Button>

        <Button
          type="button"
          width="2.375rem"
          height="2.375rem"
          backgroundColor="#F1E9C9"
        >
          <ShoppingCart
            color="#C47F17"
            weight="fill"
            size={23}
          />
        </Button>
      </HeaderNavBox>
    </HeaderContainer>

  )
}