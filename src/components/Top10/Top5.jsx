import {Top5Style} from "./Style";
import Barra from "../Barra/Barra";

const Top5 = ({top5}) => {
    return (
        <Top5Style>
            {top5.map((item, index) => (
                <Barra key={index} posicao={index+1} nome={item.nome} pontuacao={item.pontos}/>
            ))}
        </Top5Style>
    )
}

export default Top5;