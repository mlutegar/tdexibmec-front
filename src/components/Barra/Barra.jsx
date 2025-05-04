import {BarraStyle} from "./Style";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import {Homem1} from "../../svgs/avatars/Homem1";
import {getAvatar} from "../../Avatar";

const Barra = ({
                   posicao = 1,
                   icone = "homem1",
                   nome = "michel",
                   pontuacao = 90,
                   pontuacaoMaxima = 100
               }) => {

    const calcularLargura = (pontuacao) => {
        const larguraMaxima = 15; // Largura máxima em pixels
        const largura = (pontuacao / pontuacaoMaxima) * larguraMaxima;
        return largura;
    }

    return (
        <BarraStyle largura={calcularLargura(pontuacao)}>
            <div>
                #{posicao}
            </div>
            <div className={"info"}>
                <BotaoAvatar
                    className={'avatar'}
                    ativado={false}
                >
                    { getAvatar(icone) }
                </BotaoAvatar>
                {nome}
            </div>
            <div className={"container-pontuacao"}>
                {pontuacao}
            </div>
        </BarraStyle>
    )
}

export default Barra;