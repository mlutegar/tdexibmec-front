import { PontuacaoStyle } from "./Style";
import {Estrela} from "../../svgs/Estrela";

const Pontuacao = ({valor}) => {
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