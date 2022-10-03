// Components
import { HomeAd } from "../../components/HomeAd";
import { CoffeeCard } from "../../components/CoffeeCard";

// Styles
import { CardsLayout, MenuContainer, MenuTitle } from "./styles";

// Utils
import { coffeeOptionsList } from "../../utils/options";


export function Home() {
  // render
  return (
    <>
      <HomeAd />
      <MenuContainer>
        <MenuTitle>
          Nossos cafés
        </MenuTitle>
        <CardsLayout>
        {coffeeOptionsList.map(coffeeOption => {
          return(
            <CoffeeCard
              key={coffeeOption.id}
              title={coffeeOption.title}
              ingredients={coffeeOption.ingredients}
              description={coffeeOption.description}
              value={coffeeOption.value}
              imgSource={coffeeOption.imgSource}
            />
          )
        })}
        </CardsLayout>
      </MenuContainer>
    </>
  )
}