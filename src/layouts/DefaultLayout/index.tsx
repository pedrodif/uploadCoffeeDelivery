// Packages
import { Outlet } from "react-router-dom";

// Components
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

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