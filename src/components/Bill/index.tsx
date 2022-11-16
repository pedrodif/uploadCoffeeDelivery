// Packages
import {
  Minus,
  Plus,
  Trash
} from "phosphor-react";

// Components
import { Button } from "../Button";

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
import { UiNumber } from "../UiNumber";

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
        R$ {value}
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
          <p>R$ 3,50</p>
        </BillInformationWrapper>

        <FinalAmount>
          <p>Total</p>
          <p>R$ 33,20</p>
        </FinalAmount>
      </PurchaseInformation>
    </>
  )
}