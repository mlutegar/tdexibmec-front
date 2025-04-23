import BaseJogo from "./BaseJogo";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import Top3 from "../components/Top3/Top3";
import Top5 from "../components/Top10/Top5";
import Botao from "../components/Botao/Botao";
import {useNavigate} from "react-router-dom";

const Ranking = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cronograma");
    }

    return (
        <BaseJogo>
            <TituloPagina
                titulo={"Ranking final"}
            />
            <Top3/>
            <Top5/>
            <Botao onClick={handleClick}>
                AVANÇAR
            </Botao>
        </BaseJogo>
    )
}

export default Ranking;