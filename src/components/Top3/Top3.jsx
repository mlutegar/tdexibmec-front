import {Top3Style} from "./Style";
import Coluna from "../Coluna/Coluna";

const Top3 = () => {
    return (
        <Top3Style>
            <Coluna
                posicaoNumero={2}
                nomeCompetidor={"victor"}
                iconeCompetidor={"imagens/perfilDefault.png"}
            />
            <Coluna
                posicaoNumero={1}
                nomeCompetidor={"Michel"}
                iconeCompetidor={"imagens/perfilDefault.png"}
            />
            <Coluna
                posicaoNumero={3}
                nomeCompetidor={"matheus"}
                iconeCompetidor={"imagens/perfilDefault.png"}
            />
        </Top3Style>
    )
}

export default Top3;