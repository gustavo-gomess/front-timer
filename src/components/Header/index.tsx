import { HeaderContainer } from "./styles";
import { Timer, Scroll } from "phosphor-react";

import Logoignite from "../../assets/Logoignite.svg";

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logoignite} alt="" />
      <nav>
        <a href="">
          <Timer size={24} />
        </a>
        <a href="">
          <Scroll size={24} />
        </a>
      </nav>
    </HeaderContainer>
  );
}
