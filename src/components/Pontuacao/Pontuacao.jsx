import { PontuacaoStyle } from "./Style";
import {Estrela} from "../../svgs/Estrela";

const Pontuacao = ({valor = 0}) => {
  return (
      <PontuacaoStyle>
        <Estrela/>
        <div className={'valor'}>
          {valor}
        </div>
      </PontuacaoStyle>
  )
}

export default Pontuacao;