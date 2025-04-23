import {CardPerguntaStyle} from "./Style";

const CardPergunta = ({letraDaAlternativa, textoDaAlternativa, selecionado, onSelecao}) => {
    return (
        <CardPerguntaStyle className={selecionado ? "ativo" : ""} onClick={onSelecao}>
            <div className={"letra-alternativa"}>
                {letraDaAlternativa}
            </div>

            <div className={"texto-alternativa"}>
                {textoDaAlternativa}
            </div>
        </CardPerguntaStyle>
    );
};

export default CardPergunta;