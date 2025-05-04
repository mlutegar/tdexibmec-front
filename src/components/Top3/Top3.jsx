import {Top3Style} from "./Style";
import Coluna from "../Coluna/Coluna";

const Top3 = ({top3}) => {
    return (
        <Top3Style>
            <Coluna
                posicaoNumero={2}
                nomeCompetidor={top3[1].nome}
                iconeCompetidor={top3[1].avatar}
            />
            <Coluna
                posicaoNumero={1}
                nomeCompetidor={top3[0].nome}
                iconeCompetidor={top3[0].avatar}
            />
            <Coluna
                posicaoNumero={3}
                nomeCompetidor={top3[2].nome}
                iconeCompetidor={top3[2].avatar}
            />
        </Top3Style>
    )
}

export default Top3;