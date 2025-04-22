import { HeaderTelaInicialStyle } from "./Style";
import {Logo} from "../../svgs/Logo";

const HeaderTelaInicial = () => (
  <HeaderTelaInicialStyle>
    <div className={"boas-vindas"}>
      Seja bem-vindo ao:
    </div>

    <div className={"titulo"}>
      <div className={"titulo-principal"}>
        RECONSTRUINDO
      </div>
      <div className={"titulo-secundario"}>
        O FUTURO
      </div>
    </div>

    <div className={"logo"}>
      <Logo/>
    </div>

  </HeaderTelaInicialStyle>
)

export default HeaderTelaInicial;