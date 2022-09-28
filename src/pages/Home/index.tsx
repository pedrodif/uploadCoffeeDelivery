

// Components
import { HomeAd } from "../../components/HomeAd";
import { CoffeeCard } from "../../components/CoffeeCard";

//styles
import { MenuContainer, MenuTitle } from "./styles";


export function Home() {
  // render
  return (
    <>
      <HomeAd />
      <MenuContainer>
        <MenuTitle>
          Nossos cafés
        </MenuTitle>
        <CoffeeCard />
      </MenuContainer>
    </>
  )
}