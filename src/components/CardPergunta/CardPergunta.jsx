import {CardPerguntaStyle} from "./Style";

const CardPergunta = ({letraDaAlternativa, textoDaAlternativa, selecionado, incorreto, correto, onSelecao}) => {
    let className = "";
    if (selecionado) {
        if (incorreto) {
            className = "incorreto";
        }
        else if (correto) {
            className = "correto";
        }
        else {
            className = "ativo";
        }
    } else if (correto) {
        className = "correto";
    }

    return (
        <CardPerguntaStyle className={className} onClick={onSelecao}>
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