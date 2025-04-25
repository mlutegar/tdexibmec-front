import {Top5Style} from "./Style";
import Barra from "../Barra/Barra";
import {useEffect, useState} from "react";

const Top5 = ({top5}) => {
    const [pontuacaoMaximaDoTop5, setPontuacaoMaximaDoTop5] = useState(100);

    useEffect(() => {
        calcularPontuacaoMaxima();
    }, []);

    const calcularPontuacaoMaxima = () => {
        let maiorPontuacao = 0;
        top5.forEach((item) => {
            if (item.pontos > maiorPontuacao) {
                maiorPontuacao = item.pontos;
            }
        });
        setPontuacaoMaximaDoTop5(maiorPontuacao);
    }

    return (
        <Top5Style>
            {top5.map((item, index) => (
                <Barra key={index} posicao={index+1} nome={item.nome} pontuacao={item.pontos} pontuacaoMaxima={pontuacaoMaximaDoTop5}/>
            ))}
        </Top5Style>
    )
}

export default Top5;