// Packages
import {
  Bank,
  Money,
  CreditCard,
  MapPinLine,
  CurrencyDollar
} from "phosphor-react";
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm, Controller } from "react-hook-form";

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

const FormValidationSchema = zod.object({
  zipCode: zod.string(),
  street: zod.string(),
  addressNumber: zod.string(),
  neighborhood: zod.string(),
  additionalInfo: zod.string(),
  city: zod.string(),
  FU: zod.string(),
})

type IDeliveryFormData = zod.infer<typeof FormValidationSchema>

export function Checkout() {
  // Hooks
  const navigate = useNavigate();

  const DeliveryForm = useForm<IDeliveryFormData>({
    resolver: zodResolver(FormValidationSchema),
  })

  const { handleSubmit, watch, control } = DeliveryForm;

  // States
  const [checkoutData, setCheckoutData] = useState({})

  // Functions
  const onSubmit: SubmitHandler<IDeliveryFormData> = (data) => {
    if (data) {
      console.log(data);
      navigate("/delivery");
    }
  }

  // Render
  return (
    <CheckoutContainer>
      <FormContainer
        onSubmit={handleSubmit(onSubmit)}
      >
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

            <Controller
              control={control}
              name="zipCode"
              rules={{ required: true }}
              render={({ field: { onChange }}) =>
                <Input
                  type="text"
                  id="zipCode"
                  placeholder="CEP"
                  width="12.5rem"
                  onChange={onChange}
                />
              }
            />

            <Controller
              control={control}
              name="street"
              rules={{ required: true }}
              render={({ field: { onChange }}) =>
                <Input
                type="text"
                id="street"
                placeholder="Rua"
                width="35rem"
                onChange={onChange}
                />
              }
            />

            <Row>
              <Controller
                control={control}
                name="addressNumber"
                rules={{ required: true }}
                render={({ field: { onChange }}) =>
                  <Input
                    type="text"
                    id="addressNumber"
                    placeholder="Número"
                    width="12.5rem"
                    onChange={onChange}
                  />
                }
             />

              <Controller
                control={control}
                name="additionalInfo"
                render={({ field: { onChange }}) =>
                  <Input
                    type="text"
                    id="additionalInfo"
                    placeholder="Complemento"
                    width="21.75rem"
                    onChange={onChange}
                  />
                }
             />
            </Row>

            <Row>
              <Controller
                control={control}
                name="neighborhood"
                rules={{ required: true }}
                render={({ field: { onChange }}) =>
                  <Input
                    type="text"
                    id="neighborhood"
                    placeholder="Bairro"
                    width="12.5rem"
                    onChange={onChange}
                  />
                }
              />

              <Controller
                control={control}
                name="city"
                rules={{ required: true }}
                render={({ field: { onChange }}) =>
                  <Input
                    type="text"
                    id="city"
                    placeholder="Cidade"
                    width="17.25rem"
                    onChange={onChange}
                  />
                }
              />

              <Controller
                control={control}
                name="FU"
                rules={{ required: true }}
                render={({ field: { onChange }}) =>
                  <Input
                    type="text"
                    id="FU"
                    placeholder="UF"
                    width="3.75rem"
                    onChange={onChange}
                  />
                }
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
                <CreditCard
                  color="#8047F8"
                  size={18}
                />

                CARTÃO DE CRÉDITO
              </Button>

              <Button
                type="button"
              >
                <Bank
                  color="#8047F8"
                  size={18}
                />

                CARTÃO DE DÉBITO
              </Button>

              <Button
                type="button"
              >
                <Money
                  color="#8047F8"
                  size={18}
                />

                DINHEIRO
              </Button>
            </PaymentMethodWrapper>
          </SecondSection>
        </FormInsideOrganizerWrapper>

        <div>
          <FormTitle>Cafés selecionados</FormTitle>

          <CheckoutPurchaseWrapper>
            <Bill />

            <pre>{JSON.stringify(watch(), null, 2)}</pre>

            <Button
              weight="700"
              type="submit"
              width="22rem"
              height="2.875rem"
              color="#FFFFFF"
              backgroundColor="#DBAC2C"
            >
              CONFIRMAR PEDIDO
            </Button>
          </CheckoutPurchaseWrapper>
        </div>
      </FormContainer>
    </CheckoutContainer>
  )
}