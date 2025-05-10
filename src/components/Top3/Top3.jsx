import {Top3Style} from "./Style";
import Coluna from "../Coluna/Coluna";
import {useState} from "react";

const Top3 = ({top3}) => {
    const quantidadeDeCompetidores = top3.length;

    return (
        <Top3Style>
            {quantidadeDeCompetidores === 1 && (
                <Coluna
                    posicaoNumero={1}
                    nomeCompetidor={top3[0].espectador}
                    iconeCompetidor={top3[0].avatar}
                />
            )}

            {quantidadeDeCompetidores === 2 && (
                <>
                    <Coluna
                        posicaoNumero={2}
                        nomeCompetidor={top3[1].espectador}
                        iconeCompetidor={top3[1].avatar}
                    />
                    <Coluna
                        posicaoNumero={1}
                        nomeCompetidor={top3[0].espectador}
                        iconeCompetidor={top3[0].avatar}
                    />
                </>
            )}

            {quantidadeDeCompetidores === 3 && (
                <>
                    <Coluna
                        posicaoNumero={2}
                        nomeCompetidor={top3[1].espectador}
                        iconeCompetidor={top3[1].avatar}
                    />
                    <Coluna
                        posicaoNumero={1}
                        nomeCompetidor={top3[0].espectador}
                        iconeCompetidor={top3[0].avatar}
                    />
                    <Coluna
                        posicaoNumero={3}
                        nomeCompetidor={top3[2].espectador}
                        iconeCompetidor={top3[2].avatar}
                    />
                </>
            )}
        </Top3Style>
    )
}

export default Top3;