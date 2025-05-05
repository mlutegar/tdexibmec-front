import BaseJogo from "./BaseJogo";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import Top3 from "../components/Top3/Top3";
import Top5 from "../components/Top10/Top5";
import Botao from "../components/Botao/Botao";
import {useNavigate} from "react-router-dom";
import {Logo} from "../svgs/Logo";
import Footer from "../components/Footer/Footer";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";

const Ranking = () => {
    const navigate = useNavigate();
    const [nomePalestrante, setNomePalestrante] = useState(localStorage.getItem("palestrante") || "Palestrante");

    const [ranking, setRanking] = useState([]);
    const [botaoDesativado, setBotaoDesativado] = useState(true);

    const [nomeJogadorAtual, setNomeJogadorAtual] = useState(localStorage.getItem("name"));
    const [pontosJogadorAtual, setPontosJogadorAtual] = useState(localStorage.getItem("pontuacao"));

    const [top5, setTop5] = useState([]);

    useEffect(() => {
        const adicionarJogadorAtualAoRanking = () => {
            const jogadorAtual = {
                espectador: nomeJogadorAtual,
                score: pontosJogadorAtual
            };

            const rankingAtualizado = [...top5, jogadorAtual].sort((a, b) => b.score - a.score).slice(0, 5);
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

        const fethTop5 = async () => {
            const csrftoken = Cookies.get('csrftoken');
            const response = await fetch("https://okkarelatorio.fly.dev/api/relatorios/", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrftoken,
                },
            });

            if (!response.ok) {
                console.error("Erro ao buscar o ranking");

                const top5Padrao = [
                    {espectador: "Lucas", score: 100, avatar: "robo2"},
                    {espectador: "Maria", score: 90, avatar: "homem2"},
                    {espectador: "João", score: 80, avatar: "mulher1"},
                    {espectador: "Ana", score: 70, avatar: "mulher2"},
                    {espectador: "Pedro", score: 60, avatar: "robo1"}
                ];

                setTop5(top5Padrao);
                return;
            }

            const data = await response.json();
            // setTop5(data);

            const top5Padrao = [
                {espectador: "Lucas", score: 100, avatar: "robo2"},
                {espectador: "Maria", score: 90, avatar: "homem2"},
                {espectador: "João", score: 80, avatar: "mulher1"},
                {espectador: "Ana", score: 70, avatar: "mulher2"},
                {espectador: "Pedro", score: 60, avatar: "robo1"}
            ];

            setTop5(top5Padrao);
        }

        if (top5 === undefined || top5.length === 0) {
            fethTop5();
        }
        adicionarJogadorAtualAoRanking();
        desativarBotaoPor5Segundos();
    }, [top5]);

    const handleClick = () => {
        navigate("/cronograma");
    }



    return (
        <BaseJogo>
            <TituloPagina
                titulo={"Resultado da dinâmica do " + nomePalestrante}
                subtitulo={
                    <>
                        <Botao className={"mini"} onClick={handleClick}>
                            SAIR
                        </Botao>
                    </>
                }
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
            <Footer>
                <Logo/>
            </Footer>
        </BaseJogo>
    )
}

export default Ranking;