// Packages
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useCallback, useEffect, useState } from "react";

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
  ingredients: string | IIngredients[];
  description: string;
  value: number;
  imgSource: string;
}
interface IIngredients {
  id: string;
  value: string;
}
interface IIngridientsBaseComponent {
  value: string;
}

function IngridientsRenderBase({ value }: IIngridientsBaseComponent) {
  return(
    <Ingredients>
      {value}
    </Ingredients>
  )
}

export function CoffeeCard({ imgSource, ingredients, title, description, value }: ICoffeeCardProps) {
  const [ingredientsArray, setIngredientsArray] = useState<IIngredients[]>([])

  const verifyIngridientsArray = useCallback(() =>  {
   if (ingredients.length > 1) {
    setIngredientsArray(ingredients as IIngredients[])
    return true;
   }
   return false;
  }, []);

  useEffect(() => {
    verifyIngridientsArray();
  }, [])

  return (
    <CardContainer>
      <CardImageWrapper>
        <img src={imgSource} alt="Coffee illustration image" />
      </CardImageWrapper>

      {/* demarcação  */}
      <CardIngredientsWrapper>
        {ingredientsArray.length > 0 ?
        ingredientsArray?.map(ingredient => {
          return(
            <IngridientsRenderBase
              key={ingredient.id}
              value={ingredient.value}
            />
          )
        }) :
          <IngridientsRenderBase value={ingredients as string} />
        }
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