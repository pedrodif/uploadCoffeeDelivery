// Components
import { CoffeeGroup } from "../../components/CoffeeGroup";
import { CoffeeImg } from "../../components/CoffeeImg";
import { PackageGroup } from "../../components/PackageGroup";
import { ShoppingCartGroup } from "../../components/ShoppingCartGroup";
import { TimerGroup } from "../../components/TimerGroup";

// Styles
import {
  Banner,
  BannerBody,
  BannerHeader,
  BannerTextContainer,
  BodyBox,
  Container,
  HeaderSubtitle,
  HeaderTitle
} from "./styles";


export function Home() {
  return (
    <Container>
      <Banner>
        <BannerTextContainer>
          <BannerHeader>
            <HeaderTitle>Encontre o café perfeito para qualquer hora do dia</HeaderTitle>
            <HeaderSubtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</HeaderSubtitle>
          </BannerHeader>

          <BannerBody>
           <div>
              <BodyBox>
                <ShoppingCartGroup />
                <p>Compra simples e segura</p>
              </BodyBox>

              <BodyBox>
                <TimerGroup />
                <p>Entrega rápida e rastreada</p>
              </BodyBox>
            </div>

            <div>
              <BodyBox>
                <PackageGroup />
                <p>Embalagem mantém o café intacto</p>
              </BodyBox>

              <BodyBox>
                <CoffeeGroup />
                <p>O café chega fresquinho até você</p>
              </BodyBox>
            </div>
          </BannerBody>
        </BannerTextContainer>

        <CoffeeImg />
      </Banner>
    </Container>
  )

}