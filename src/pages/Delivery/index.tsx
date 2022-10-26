// Packages
import {
  Timer,
  MapPin,
  CurrencyDollar
} from 'phosphor-react';

// Components
import DeliveryImage from '../../components/DeliveryImage';
import { IconBackground } from '../../components/IconBackground';

// Styles
import {
  TitleWrapper,
  DeliveryTitle,
  TimeInformation,
  DeliveryContainer,
  PaymentInformation,
  AddressInformation,
  DeliveryInformation,
  DeliveryInformationGradientWrapper,
} from "./styles";

export function Delivery() {
  return (
    <DeliveryContainer>
      <div>
        <TitleWrapper>
          <DeliveryTitle>Uhu! Pedido confirmado</DeliveryTitle>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleWrapper>

        <DeliveryInformationGradientWrapper>
          <DeliveryInformation>
            <AddressInformation>
              <IconBackground
                backgroundColor="#8047F8"
              >
                <MapPin
                  size={22}
                  color="#FAFAFA"
                  weight="fill"
                />
              </IconBackground>

              <section>
                Entrega em
                <strong> Rua João Daniel Martinelli, 102 </strong>
                Farrapos - Porto Alegre, RS
              </section>
            </AddressInformation>

            <TimeInformation>
              <IconBackground
                backgroundColor="#DBAC2C"
              >
                <Timer
                  size={22}
                  color="#FAFAFA"
                  weight="fill"
                />
              </IconBackground>

              <section>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </section>
            </TimeInformation>

            <PaymentInformation>
              <IconBackground
                backgroundColor="#C47F17"
              >
                <CurrencyDollar
                  size={22}
                  color="#FAFAFA"
                  weight="fill"
                />
              </IconBackground>

              <section>
                <p>Pagamento na entrega</p>
                <strong>Cartão de Crédito</strong>
              </section>
            </PaymentInformation>
          </DeliveryInformation>
        </DeliveryInformationGradientWrapper>
      </div>

      <div>
        <DeliveryImage />
      </div>
    </DeliveryContainer>
  )
}