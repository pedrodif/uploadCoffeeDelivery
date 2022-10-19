// Packages
import { Outlet } from "react-router-dom";

// Components
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer"

// Styles
import { FooterContainer, LayoutContainer } from "./styles";

export function DefaultLayout() {
  return(
    <LayoutContainer>
      <Header />
      <Outlet />
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  )
}