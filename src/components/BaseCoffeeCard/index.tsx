// Packages
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"

// Assets
import tradicionalCoffee from "../../assets/traditionalCoffee.svg"

// Styles
import { CoffeesAmountBox, CoffeesBillBox, CoffeesBillValue, CoffeesCard, CoffeesCardImg, CoffeesDescriptionBox, CoffeesIngredients, CoffeesIngredientsBox, CoffeesShoppingBox, CoffeesShoppingButton, CoffeesTitle } from "./styles"

export function BaseCoffeeCard() {
  return (
    <CoffeesCard>
      <CoffeesCardImg>
        <img src={tradicionalCoffee} alt="Coffee Image" />
      </CoffeesCardImg>

      <CoffeesIngredientsBox>
        <CoffeesIngredients>
          TRADICIONAL
        </CoffeesIngredients>
      </CoffeesIngredientsBox>

      <CoffeesTitle>
        Expresso Tradicional
      </CoffeesTitle>

      <CoffeesDescriptionBox>
        O tradicional café feito com água quente e grãos moídos
      </CoffeesDescriptionBox>

      <CoffeesShoppingBox>
        <CoffeesBillBox>
          R$
          <CoffeesBillValue>
            9,90
          </CoffeesBillValue>
        </CoffeesBillBox>

        <CoffeesAmountBox>
          <Minus color="#4B2995" />
          <p>1</p>
          <Plus color="#4B2995" />
        </CoffeesAmountBox>

        <CoffeesShoppingButton
          type="button"
        >
          <ShoppingCartSimple color="#F3F2F2" weight="fill" size={23} />
        </CoffeesShoppingButton>
      </CoffeesShoppingBox>
    </CoffeesCard>
  )
}