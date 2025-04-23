import {BarraStyle} from "./Style";

const Barra = ({
                   posicao = 1,
                   icone = "imagens/perfilDefault.png",
                   nome = "michel",
                   pontuacao = 90
}) => {

    const calcularLargura = (pontuacao) => {
        const larguraMaxima = 300; // Largura máxima em pixels
        const pontuacaoMaxima = 100; // Pontuação máxima
        const largura = (pontuacao / pontuacaoMaxima) * larguraMaxima;
        return largura;
    }

    return (
        <BarraStyle>
            <div>
                #{posicao}
            </div>
            <div className={"info"}>
                <img src={icone} alt="imagem de perfil" className={"imagem-perfil"}/>
                {nome}
            </div>
            <div className={"container-pontuacao"}>
                {pontuacao}
            </div>
        </BarraStyle>
    )
}

export default Barra;