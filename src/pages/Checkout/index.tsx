// Styles
import { CheckoutContainer, Teste } from "./styles";

export function Checkout() {
  // Render
  return (
    <CheckoutContainer>
      <Teste>
        <form>
          <h2>Endereço de Entrega</h2>
          <h3>Informe o endereço onde deseja receber seu pedido</h3>
          <div>
            <input type="text" placeholder="CEP" />
          </div>
        </form>
      </Teste>
    </CheckoutContainer>
  )
}