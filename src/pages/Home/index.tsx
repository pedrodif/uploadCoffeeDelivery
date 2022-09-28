

// Components
import { HomeAd } from "../../components/HomeAd";
import { BaseCoffeeCard } from "../../components/BaseCoffeeCard";

// Assets
import tradicionalCoffee from "../../assets/traditionalCoffee.svg"

//styles
import { CoffeesContainer, CoffeesContainerTitle } from "./styles";


export function Home() {
  // render
  return (
    <>
      <HomeAd />
      <CoffeesContainer>
        <CoffeesContainerTitle>Nossos cafés</CoffeesContainerTitle>
        <BaseCoffeeCard />
      </CoffeesContainer>
    </>
  )
}