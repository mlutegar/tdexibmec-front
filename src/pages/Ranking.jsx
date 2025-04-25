import BaseJogo from "./BaseJogo";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import Top3 from "../components/Top3/Top3";
import Top5 from "../components/Top10/Top5";
import Botao from "../components/Botao/Botao";
import {useNavigate} from "react-router-dom";
import {Logo} from "../svgs/Logo";
import Footer from "../components/Footer/Footer";
import {useEffect, useState} from "react";

const Ranking = () => {
    const navigate = useNavigate();

    const [ranking, setRanking] = useState([]);
    const [botaoDesativado, setBotaoDesativado] = useState(true);

    const [nomeJogadorAtual, setNomeJogadorAtual] = useState(localStorage.getItem("name"));
    const [pontosJogadorAtual, setPontosJogadorAtual] = useState(localStorage.getItem("pontuacao"));

    useEffect(() => {
        adicionarJogadorAtualAoRanking();
        desativarBotaoPor5Segundos();
    }, []);

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

    const adicionarJogadorAtualAoRanking = () => {
        const jogadorAtual = {
            nome: nomeJogadorAtual,
            pontos: pontosJogadorAtual
        };

        const rankingAtualizado = [...top5, jogadorAtual].sort((a, b) => b.pontos - a.pontos).slice(0, 5);
        setRanking(rankingAtualizado);
        console.log(rankingAtualizado);
    }

    const desativarBotaoPor5Segundos = () => {
        setBotaoDesativado(true);
        const timer = setTimeout(() => {
            setBotaoDesativado(false);
        }, 5000);
        return () => clearTimeout(timer);
    }

    return (
        <BaseJogo>
            <TituloPagina
                titulo={"Ranking final"}
            />
            {ranking.length > 4 && (
                <>
                    <Top3
                        top3={ranking.slice(0, 3)}
                    />
                    <Top5
                        top5={ranking}
                    />
                </>
            )}

            <Botao onClick={handleClick} disabled={botaoDesativado}>
                AVANÇAR
            </Botao>
            <Footer>
                <Logo/>
            </Footer>
        </BaseJogo>
    )
}

export default Ranking;