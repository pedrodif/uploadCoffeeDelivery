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


export function CoffeeCard({ imgSource, ingredients, title, description, value }: ICoffeeCardProps) {
  // Components
  function IngridientsRenderBase({ value }: IIngridientsBaseComponent) {
    // Render
    return(
      <Ingredients>
        {value}
      </Ingredients>
    )
  }

  // Functions
  const handleMap = (ingredients: IIngredients[]) =>
	ingredients?.map((ingredient) => {
    return (
      <IngridientsRenderBase
        key={ingredient.id}
        value={ingredient.value as unknown as string}
      />
    )
  });

  const handleIngredients = (ingredients: ICoffeeCardProps["ingredients"]) =>  {
   if (typeof ingredients === "string") {
      return (
        <IngridientsRenderBase
        value={ingredients as string}
        />
      )
    }
   return handleMap(Object.values(ingredients));
  }

  // Render
  return (
    <CardContainer>
      <CardImageWrapper>
        <img src={imgSource} alt="Coffee illustration image" />
      </CardImageWrapper>

      <CardIngredientsWrapper>
        {handleIngredients(ingredients)}
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