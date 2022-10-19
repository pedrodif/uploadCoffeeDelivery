// Packages
import { InstagramLogo, WhatsappLogo, FacebookLogo } from "phosphor-react";

// Components
import { Logo } from "../Logo";

// Styles
import { FooterContainer, MediaContainer } from "./styles";

export function Footer() {
  // Render
  return (
    <FooterContainer>
      <Logo />
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