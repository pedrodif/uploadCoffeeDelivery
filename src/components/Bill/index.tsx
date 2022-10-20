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
  AmountWrapper,
  BillWrapper,
  ImageWrapper,
  CoffeeSelectedCard,
  ImageStyle,
  FormInsideOrganizerWrapper,
  Row,
  BillInformationWrapper,
  PurchaseInformation,
  FinalAmount
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
        R$ {value}
      </BillWrapper>
    </CoffeeSelectedCard>
  )
}

export function Bill() {
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
          <span>Total de itens</span>
          <span>R$ 29,70</span>
        </BillInformationWrapper>

        <BillInformationWrapper>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </BillInformationWrapper>

        <FinalAmount>
          <strong>Total</strong>
          <strong>R$ 33,20</strong>
        </FinalAmount>
      </PurchaseInformation>
    </>
  )
}