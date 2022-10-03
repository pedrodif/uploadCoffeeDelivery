// Packages
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

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
} from "./styles";

export interface ICoffeeCardProps {
  id?: string;
  title: string;
  ingredients: string;
  description: string;
  value: number;
  imgSource: string;
}

export function CoffeeCard({ imgSource, ingredients, title, description, value }: ICoffeeCardProps) {
  return (
    <CardContainer>
      <CardImageWrapper>
        <img src={imgSource} alt="Coffee illustration image" />
      </CardImageWrapper>

      <CardIngredientsWrapper>
        <Ingredients>
          {ingredients}
        </Ingredients>
      </CardIngredientsWrapper>

      <CardTitle>
        {title}
      </CardTitle>

      <CardDescriptionWrapper>
        {description}
      </CardDescriptionWrapper>

      <CardShoppingWrapper>
        <CardBillWrapper>
          R$
          <CardBillValue>
            {value}
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