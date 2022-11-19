// Packages
import {
  Plus,
  Minus,
  ShoppingCartSimple
} from "phosphor-react";

// Styles
import {
  CardTitle,
  Ingredients,
  CardContainer,
  CardBillWrapper,
  CardImageWrapper,
  CardAmountWrapper,
  CardShoppingWrapper,
  CardIngredientsWrapper,
  CardDescriptionWrapper
} from "./styles";

// Components
import { Button } from "../Button";
import { UiNumber } from "../UiNumber";

export interface ICoffeeCardProps {
  id?: string;
  value: number;
  title: string;
  imgSource: string;
  description: string;
  ingredients: string | IIngredients[];
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
          value={ingredient as string}
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
          <UiNumber
            format="0.00"
          >
            {value}
          </UiNumber>
        </CardBillWrapper>

        <CardAmountWrapper>
          <Minus color="#4B2995" />
          <p>1</p>
          <Plus color="#4B2995" />
        </CardAmountWrapper>

        <Button
          type="button"
          width="2.375rem"
          height="2.375rem"
          backgroundColor="#4B2995"
        >
          <ShoppingCartSimple
            color="#F3F2F2"
            weight="fill"
            size={23}
          />
        </Button>
      </CardShoppingWrapper>
    </CardContainer>
  )
}