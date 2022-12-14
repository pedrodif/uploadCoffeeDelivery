// Packages
import {
  MapPin,
  ShoppingCart
} from "phosphor-react";

// Hooks
import { useNavigate } from "react-router-dom";

// Components
import { Logo } from "../Logo";
import { Select } from "../Select";
import { Button } from "../Button";


// Styles
import {
  LogoBox,
  HeaderNavBox,
  HeaderContainer,
} from "./styles";

// Utils
import { AvailableLocs } from "../../utils/options";

export function Header() {
  const navigate = useNavigate();

  // Functions
  function handleClick(path: string) {
    navigate(path);
  }

  return (
    <HeaderContainer>
      <LogoBox
        onClick={() => handleClick("/")}
      >
        <Logo />
      </LogoBox>

      <HeaderNavBox>
        <div>
          <div>
            <Select.Root>
              <Select.Icon>
                <MapPin
                  color="#8047F8"
                  weight="fill"
                  size={23}
                />
              </Select.Icon>
              <Select.Main
                data={AvailableLocs}
              />
            </Select.Root>
          </div>
        </div>

        <Button
          type="button"
          width="2.375rem"
          height="2.375rem"
          backgroundColor="#F1E9C9"
          onClick={() => handleClick("/checkout")}
        >
          <ShoppingCart
            color="#C47F17"
            weight="fill"
            size={23}
          />
        </Button>
      </HeaderNavBox>
    </HeaderContainer>
  )
}