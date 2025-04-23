import {BarraStyle} from "./Style";

const Barra = ({
                   posicao = 1,
                   icone = "imagens/perfilDefault.png",
                   nome = "michel",
                   pontuacao = 90,
                   pontuacaoMaxima = 100
               }) => {

    const calcularLargura = (pontuacao) => {
        const larguraMaxima = 16.6875; // Largura máxima em pixels
        const largura = (pontuacao / pontuacaoMaxima) * larguraMaxima;
        return largura;
    }

    return (
        <BarraStyle largura={calcularLargura(pontuacao)}>
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