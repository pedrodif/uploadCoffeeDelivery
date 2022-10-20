// Packages
import { Minus, Plus, Trash } from "phosphor-react";

// Components
import { Button } from "components/Button";

// Styles
import { AmountWrapper, BillWrapper, ImageWrapper, CoffeeSelectedCard, ImageStyle, FormInsideOrganizerWrapper, Row } from "./styles";

// Assets
import { images } from "../../assets";

export function CoffeeSelected() {
  // Render
  return(
    <CoffeeSelectedCard>
      <ImageWrapper>
        <ImageStyle src={images.Traditional} alt="Coffee illustration image" />
      </ImageWrapper>

      <FormInsideOrganizerWrapper>
        <span>Expresso Tradicional</span>

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
        R$ 9,90
      </BillWrapper>
    </CoffeeSelectedCard>
  )
}