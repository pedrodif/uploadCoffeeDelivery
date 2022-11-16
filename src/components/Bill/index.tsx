// Packages
import {
  Minus,
  Plus,
  Trash
} from "phosphor-react";

// Components
import { Button } from "../Button";
import { UiNumber } from "../UiNumber";

// Styles
import {
  Row,
  ImageStyle,
  BillWrapper,
  FinalAmount,
  ImageWrapper,
  AmountWrapper,
  CoffeeSelectedCard,
  PurchaseInformation,
  BillInformationWrapper,
  FormInsideOrganizerWrapper,
  ValueWrapper
} from "./styles";

// Utils
import { BillItems } from "../../utils/options";

interface ICoffeeSelected {
  id?: string;
  title: string;
  value: number;
  imgSource: string;
}

function CoffeeSelected({ title, value, imgSource }: ICoffeeSelected) {
  // Render
  return(
    <CoffeeSelectedCard>
      <ImageWrapper>
        <ImageStyle src={imgSource} alt="Coffee illustration image" />
      </ImageWrapper>

      <FormInsideOrganizerWrapper>

        <span>{title}</span>
        <Row>
          <AmountWrapper>
            <Minus color="#4B2995" />
            <p>1</p>
            <Plus color="#4B2995" />
          </AmountWrapper>

          <Button
            type="button"
            width="5.688rem"
            height="2rem"
          >
            <Trash
              color="#8047F8"
              size={15}
            />
            REMOVER
          </Button>
        </Row>

      </FormInsideOrganizerWrapper>

      <BillWrapper>
        R$
        <UiNumber
          format="0.00"
        >
          {value}
        </UiNumber>
      </BillWrapper>
    </CoffeeSelectedCard>
  )
}

export function Bill() {
  // Render
  return(
    <>
      {BillItems?.map(item => {
        return(
          <CoffeeSelected
          key={item.id}
          title={item.title}
          value={item.value}
          imgSource={item.imgSource}
        />
        )
      })}

      <PurchaseInformation>
        <BillInformationWrapper>
          <p>Total de itens</p>

          <ValueWrapper>
            <p>R$</p>
            <UiNumber
              format="0.00"
            >
              29.70
            </UiNumber>
          </ValueWrapper>
        </BillInformationWrapper>

        <BillInformationWrapper>
          <p>Entrega</p>

          <ValueWrapper>
            <p>R$</p>
            <UiNumber
              format="0.00"
            >
              3.50
            </UiNumber>
          </ValueWrapper>
        </BillInformationWrapper>

        <FinalAmount>
          <p>Total</p>

          <ValueWrapper>
            <p>R$</p>
            <UiNumber
              format="0.00"
            >
              33.20
            </UiNumber>
          </ValueWrapper>
        </FinalAmount>
      </PurchaseInformation>
    </>
  )
}