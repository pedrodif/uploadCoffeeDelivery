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
import { useForm } from "react-hook-form";

// Components
import { Bill } from "../../components/Bill";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

// Shared
import { handleClick } from "../../shared/functions";

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
  zipCode: zod.string().min(8, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o nome da Rua'),
  addressNumber: zod.string().min(1, 'Informe o número da residência de entrega'),
  neighborhood: zod.string().min(1, 'Informe o Bairro de entrega'),
  additionalInfo: zod.string(),
  city: zod.string().min(1, 'Informe a Cidade de entrega'),
  FU: zod.string().min(1, 'Informe a Unidade Federativa da Cidade informada'),
})

type IDeliveryFormData = zod.infer<typeof FormValidationSchema>

export function Checkout() {
  // Hooks
  const DeliveryForm = useForm<IDeliveryFormData>({
    resolver: zodResolver(FormValidationSchema),
    defaultValues: {
      zipCode: '',
      street: '',
      addressNumber: '',
      neighborhood: '',
      additionalInfo: '',
      city: '',
      FU: '',
    },
  })

  const { register, handleSubmit, watch, reset } = DeliveryForm;

  // Functions
  function onSubmit (data: IDeliveryFormData) {
    console.log(data);
    // reset();
  }

  // handleClick("/delivery");


  // () => handleSubmit(onSubmit)
  // Render
  return (
    <CheckoutContainer>
      <FormContainer
        onSubmit={() => handleSubmit(onSubmit)}
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

            <Input
              type="text"
              id="zipCode"
              placeholder="CEP"
              width="12.5rem"
              {...register('zipCode')}
            />

            <Input
              type="text"
              id="street"
              placeholder="Rua"
              width="35rem"
              {...register('street')}
            />

            <Row>
              <Input
                type="text"
                id="addressNumber"
                placeholder="Número"
                width="12.5rem"
                {...register('addressNumber')}
              />

              <Input
                type="text"
                id="additionalInfo"
                placeholder="Complemento"
                width="21.75rem"
                {...register('additionalInfo')}
              />
            </Row>

            <Row>
              <Input
                type="text"
                id="neighborhood"
                placeholder="Bairro"
                width="12.5rem"
                {...register('neighborhood')}
              />

              <Input
                type="text"
                id="city"
                placeholder="Cidade"
                width="17.25rem"
                {...register('city')}
              />

              <Input
                type="text"
                id="FU"
                placeholder="UF"
                width="3.75rem"
                {...register('FU')}
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