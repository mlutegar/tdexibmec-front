import {Top5Style} from "./Style";
import Barra from "../Barra/Barra";

const Top5 = () => {
    const top5 = [
        {nome: "Lucas", pontos: 100},
        {nome: "Maria", pontos: 90},
        {nome: "João", pontos: 80},
        {nome: "Ana", pontos: 70},
        {nome: "Pedro", pontos: 60}
    ];

    return (
        <Top5Style>
            {top5.map((item, index) => (
                <Barra key={index}  posicao={index+1} nome={item.nome} pontuacao={item.pontos}/>
            ))}
        </Top5Style>
    )
}

export default Top5;