// Packages
import {
  ShoppingCart,
  Timer,
  Package,
  Coffee
} from 'phosphor-react';

// Components
import { IconBackground } from "../IconBackground";

// Assets
import coffeeBannerImg from "../../assets/coffeeBannerImg.png";

// Styles
import {
  Banner,
  BannerBody,
  BannerBodyBox,
  BannerHeader,
  BannerTextWrapper,
  HeaderSubtitle,
  HeaderTitle
} from "./styles";

export function HomeAd() {
  return (
    <Banner>
      <BannerTextWrapper>
        <BannerHeader>
          <HeaderTitle>Encontre o café perfeito para qualquer hora do dia</HeaderTitle>
          <HeaderSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</HeaderSubtitle>
        </BannerHeader>

        <BannerBody>
          <div>
            <BannerBodyBox>
              <IconBackground
                backgroundColor="#C47F17"
                width="2rem"
                height="2rem"
              >
                <ShoppingCart
                  size={17}
                  color="#FAFAFA"
                  weight="fill"
                />
              </IconBackground>
              <p>Compra simples e segura</p>
            </BannerBodyBox>

            <BannerBodyBox>
              <IconBackground
                backgroundColor="#DBAC2C"
                width="2rem"
                height="2rem"
              >
                <Timer
                  size={17}
                  color="#FAFAFA"
                  weight="fill"
                />
              </IconBackground>
              <p>Entrega rápida e rastreada</p>
            </BannerBodyBox>
          </div>

          <div>
            <BannerBodyBox>
              <IconBackground
                backgroundColor="#574F4D"
                width="2rem"
                height="2rem"
              >
                <Package
                  size={17}
                  color="#FAFAFA"
                  weight="fill"
                />
              </IconBackground>
              <p>Embalagem mantém o café intacto</p>
            </BannerBodyBox>

            <BannerBodyBox>
              <IconBackground
                backgroundColor="#8047F8"
                width="2rem"
                height="2rem"
              >
                <Coffee
                  size={17}
                  color="#FAFAFA"
                  weight="fill"
                />
              </IconBackground>
              <p>O café chega fresquinho até você</p>
            </BannerBodyBox>
          </div>
        </BannerBody>
      </BannerTextWrapper>
      <img src={coffeeBannerImg} alt="Coffee Drawing" />
    </Banner>
  )
}