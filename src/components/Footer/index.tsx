// Packages
import {
  InstagramLogo,
  WhatsappLogo,
  FacebookLogo
} from "phosphor-react";

// Hooks
import { useNavigate  } from "react-router-dom";

// Components
import { Logo } from "../Logo";

// Styles
import {
  FooterContainer,
  LogoBox,
  MediaContainer
} from "./styles";

export function Footer() {
  const navigate = useNavigate();

  // Functions
  function handleClick(path: string) {
    navigate(path);
  }

  // Render
  return (
    <FooterContainer>
      <LogoBox
        onClick={() => handleClick("/")}
      >
        <Logo />
      </LogoBox>

      <MediaContainer>
        <a href="#">
          <WhatsappLogo size="22" weight="bold" />
        </a>

        <a href="#">
          <InstagramLogo size="22" weight="bold" />
        </a>

        <a href="#">
          <FacebookLogo size="22" weight="bold"/>
        </a>
      </MediaContainer>
    </FooterContainer>
  )
}