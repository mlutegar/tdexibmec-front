import BaseJogo from "./BaseJogo";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import Top3 from "../components/Top3/Top3";
import Top5 from "../components/Top10/Top5";
import Botao from "../components/Botao/Botao";
import {useNavigate} from "react-router-dom";
import {Logo} from "../svgs/Logo";
import Footer from "../components/Footer/Footer";

const Ranking = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/cronograma");
    }

    const top5 = [
        {nome: "Lucas", pontos: 100},
        {nome: "Maria", pontos: 90},
        {nome: "João", pontos: 80},
        {nome: "Ana", pontos: 70},
        {nome: "Pedro", pontos: 60}
    ];

    return (
        <BaseJogo>
            <TituloPagina
                titulo={"Ranking final"}
            />
            <Top3
                top3={top5.slice(0, 3)}
            />
            <Top5
                top5={top5}
            />
            <Botao onClick={handleClick}>
                AVANÇAR
            </Botao>
            <Footer>
                <Logo/>
            </Footer>
        </BaseJogo>
    )
}

export default Ranking;