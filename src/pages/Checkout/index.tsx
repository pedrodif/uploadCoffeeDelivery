// Packages
import {
  Bank,
  Money,
  CreditCard,
  MapPinLine,
  CurrencyDollar
} from "phosphor-react";
import { useNavigate  } from "react-router-dom";

// Components
import { Bill } from "../../components/Bill";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

// Styles
import {
  Row,
  FormTitle,
  HeaderText,
  FirstSection,
  SectionHeader,
  SecondSection,
  FormContainer,
  CheckoutContainer,
  PaymentMethodWrapper,
  CheckoutPurchaseWrapper,
  FormInsideOrganizerWrapper
} from "./styles";

export function Checkout() {
  const navigate = useNavigate();

  // Functions
  function handleClick(path: string) {
    navigate(path);
  }

  // Render
  return (
    <CheckoutContainer>
      <FormContainer>
        <FormInsideOrganizerWrapper>
          <FormTitle>Complete seu pedido</FormTitle>
          <FirstSection>
            <SectionHeader>

              <MapPinLine
                size={20}
                color="#C47F17"
              />

              <HeaderText>
                <span>Endereço de Entrega</span>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </HeaderText>

            </SectionHeader>

            <Input
              type="text"
              placeholder="CEP"
              width="12.5rem"
            />

            <Input
              type="text"
              placeholder="Rua"
              width="35rem"
            />

            <Row>
              <Input
                type="text"
                placeholder="Número"
                width="12.5rem"
              />

              <Input
                type="text"
                placeholder="Complemento"
                width="21.75rem"
              />
            </Row>

            <Row>
              <Input
                type="text"
                placeholder="Bairro"
                width="12.5rem"
              />

              <Input
                type="text"
                placeholder="Cidade"
                width="17.25rem"
              />

              <Input
                type="text"
                placeholder="UF"
                width="3.75rem"
              />
            </Row>
          </FirstSection>

          <SecondSection>
            <SectionHeader>

              <CurrencyDollar
                size={20}
                color="#8047F8"
              />

              <HeaderText>
                <span>Pagamento</span>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </HeaderText>

            </SectionHeader>

            <PaymentMethodWrapper>
              <Button
                type="button"
              >
                <CreditCard color="#8047F8" size={18}/>
                CARTÃO DE CRÉDITO
              </Button>

              <Button
                type="button"
              >
                <Bank color="#8047F8" size={18}/>
                CARTÃO DE DÉBITO
              </Button>

              <Button
                type="button"
              >
                <Money color="#8047F8" size={18}/>
                DINHEIRO
              </Button>
            </PaymentMethodWrapper>
          </SecondSection>
        </FormInsideOrganizerWrapper>

        <div>
          <FormTitle>Cafés selecionados</FormTitle>
          <CheckoutPurchaseWrapper>
            <Bill />

            <Button
              type="submit"
              width="22rem"
              height="2.875rem"
              backgroundColor="#DBAC2C"
              color="#FFFFFF"
              weight="700"
              onClick={() => handleClick("/delivery")}
            >
              CONFIRMAR PEDIDO
            </Button>
          </CheckoutPurchaseWrapper>
        </div>
      </FormContainer>
    </CheckoutContainer>
  )
}