// Packages
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"

// Assets
import tradicionalCoffee from "../../assets/traditionalCoffee.svg"

// Styles
import {
  CardBillWrapper,
  CardBillValue,
  CardContainer,
  CardImageWrapper,
  Ingredients,
  CardIngredientsWrapper,
  CardShoppingWrapper,
  CardShopppingButton,
  CardTitle,
  CardDescriptionWrapper,
  CardAmountWrapper
} from "./styles"

export function BaseCoffeeCard() {
  return (
    <CardContainer>
      <CardImageWrapper>
        <img src={tradicionalCoffee} alt="Coffee Image" />
      </CardImageWrapper>

      <CardIngredientsWrapper>
        <Ingredients>
          TRADICIONAL
        </Ingredients>
      </CardIngredientsWrapper>

      <CardTitle>
        Expresso Tradicional
      </CardTitle>

      <CardDescriptionWrapper>
        O tradicional café feito com água quente e grãos moídos
      </CardDescriptionWrapper>

      <CardShoppingWrapper>
        <CardBillWrapper>
          R$
          <CardBillValue>
            9,90
          </CardBillValue>
        </CardBillWrapper>

        <CardAmountWrapper>
          <Minus color="#4B2995" />
          <p>1</p>
          <Plus color="#4B2995" />
        </CardAmountWrapper>

        <CardShopppingButton
          type="button"
        >
          <ShoppingCartSimple color="#F3F2F2" weight="fill" size={23} />
        </CardShopppingButton>
      </CardShoppingWrapper>
    </CardContainer>
  )
}