// Packages
import { MapPinLine, CurrencyDollar } from "phosphor-react";

// Components
import { Input } from "../../components/Input";

// Styles
import { CheckoutContainer, SectionHeader, FormFirstSection, FormTitle, HeaderText, Row } from "./styles";

export function Checkout() {
  // Render
  return (
    <CheckoutContainer>
      <form>
        <FormTitle>Complete seu pedido</FormTitle>
        <FormFirstSection>
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
        </FormFirstSection>

        <section>
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

          <div>
            <button type="button">Teste</button>
          </div>

        </section>


      </form>
    </CheckoutContainer>
  )
}