// Components
import { CoffeeGroup } from "../CoffeeGroup";
import { PackageGroup } from "../PackageGroup";
import { ShoppingCartGroup } from "../ShoppingCartGroup";
import { TimerGroup } from "../TimerGroup";

// assets
import coffeeBannerImg from "../../assets/coffeeBannerImg.png"

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
              <ShoppingCartGroup />
              <p>Compra simples e segura</p>
            </BannerBodyBox>

            <BannerBodyBox>
              <TimerGroup />
              <p>Entrega rápida e rastreada</p>
            </BannerBodyBox>
          </div>

          <div>
            <BannerBodyBox>
              <PackageGroup />
              <p>Embalagem mantém o café intacto</p>
            </BannerBodyBox>

            <BannerBodyBox>
              <CoffeeGroup />
              <p>O café chega fresquinho até você</p>
            </BannerBodyBox>
          </div>
        </BannerBody>
      </BannerTextWrapper>
      <img src={coffeeBannerImg} alt="Coffee Drawing" />
    </Banner>
  )
}