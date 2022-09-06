// Components
import Logo from "../Logo";
import { ShoppingCart } from 'phosphor-react'

// Styles
import { HeaderContainer } from "./styles";

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <span>Porto Alegre, RS</span>
      <div>
        <ShoppingCart />
      </div>
    </HeaderContainer>

  )
}