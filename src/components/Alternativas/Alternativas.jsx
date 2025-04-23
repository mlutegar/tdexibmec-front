import {AlternativasStyle} from "./Style";
import CardPergunta from "../CardPergunta/CardPergunta";
import { useState } from "react";

const Alternativas = ({alternativas, alternativaSelecionada, alternativaIncorreta, respostaCorreta, handleSelecao}) => {
    const transformarIdEmLetra = (id) => {
        const letras = ["A", "B", "C", "D"];
        return letras[id - 1];
    };

    return (
        <AlternativasStyle>
            {alternativas.map((alternativa) => (
                <CardPergunta
                    key={alternativa.id}
                    letraDaAlternativa={transformarIdEmLetra(alternativa.id)}
                    textoDaAlternativa={alternativa.texto}
                    selecionado={alternativaSelecionada === alternativa.id}
                    incorreto={alternativaIncorreta === alternativa.id}
                    onSelecao={() => handleSelecao(alternativa.id)}
                    correto={respostaCorreta === alternativa.id}
                />
            ))}
        </AlternativasStyle>
    );
};

export default Alternativas;