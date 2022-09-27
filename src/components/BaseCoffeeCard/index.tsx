// Packages
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react"

// Styles
import { CoffeesCard } from "./styles"

export function BaseCoffeeCard() {
  return (
    <CoffeesCard>
      <p>Tradicional</p>
      {/* {/* <strong>Expresso Tradicional</strong> */}
      <text>O tradicional café feito com água quente e grãos moídos</text>
      <div>
        <p>R$ 9,90</p>
        <div>
          <Minus/>
          <p>1</p>
          <Plus />
        </div>
        <button
          type="button"
        >
          <ShoppingCartSimple />
        </button>
      </div> */}
    </CoffeesCard>
  )
}