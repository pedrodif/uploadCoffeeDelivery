// Components
import { CoffeeImg } from "../../components/CoffeeImg";
import { ShoppingCartGroup } from "../../components/ShoppingCartGroup";


export function Home() {
  return (
    <section>
     <div>
        <div>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>

        <div>
          <div>
            <ShoppingCartGroup />
            <p>Compra simples e segura</p>
          </div>

          <div>
            <p>Embalagem mantém o café intacto</p>
          </div>

          <div>

            <p>Entrega rápida e rastreada</p>
          </div>

          <div>
            <p>O café chega fresquinho até você</p>
          </div>
        </div>

     </div>
      <CoffeeImg />
    </section>
  )

}