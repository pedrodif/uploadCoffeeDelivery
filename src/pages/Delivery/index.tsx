// Packages
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react'

// Components
import { IconBackground } from '../../components/IconBackground';
import DeliveryImage from '../../components/DeliveryImage';

// Styles
import { DeliveryContainer, AddressInformation, DeliveryTitle, TitleWrapper, TimeInformation, PaymentInformation, DeliveryInformation, DeliveryImageWrapper } from "./styles";

export function Delivery() {
  return (
    <DeliveryContainer>
      <div>
        <TitleWrapper>
          <DeliveryTitle>Uhu! Pedido confirmado</DeliveryTitle>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </TitleWrapper>

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
            <p>
              Entrega em
              <strong> Rua João Daniel Martinelli, 102 </strong>
              Farrapos - Porto Alegre, RS
            </p>
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
            <p>
              Previsão de entrega
              <strong>20 min - 30 min</strong>
            </p>
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
            <p>
              Pagamento na entrega
              <strong>Cartão de Crédito</strong>
            </p>
          </PaymentInformation>
        </DeliveryInformation>
      </div>

      <DeliveryImageWrapper>
        <DeliveryImage />
      </DeliveryImageWrapper>
    </DeliveryContainer>
  )
}