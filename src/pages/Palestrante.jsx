import {useLocation, useNavigate} from "react-router-dom";
import BaseJogo from "./BaseJogo";
import BarraProgresso from "../components/BarraProgresso/BarraProgresso";
import Alternativas from "../components/Alternativas/Alternativas";
import Botao from "../components/Botao/Botao";
import {Logo} from "../svgs/Logo";
import ValorAcerto from "../components/ValorAcerto/ValorAcerto";
import Footer from "../components/Footer/Footer";
import {useState} from "react";
import TituloPergunta from "../components/TituloPergunta/TituloPergunta";
import {usePontuacao} from "../context/PontuacaoProvider";

const Palestrante = () => {
    const [alternativaSelecionada, setAlternativaSelecionada] = useState(null);
    const [alternativaIncorreta, setAlternativaIncorreta] = useState(null);
    const [mostrarRespostaCorreta, setMostrarRespostaCorreta] = useState(false);
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [textoBotao, setTextoBotao] = useState("ENVIAR");

    const { pontuacao, adicionarPontos } = usePontuacao();
    const navigate = useNavigate();
    const location = useLocation();
    const {palestrante} = location.state;

    const handleSelecao = (id) => {
        setAlternativaSelecionada(id);
    };

    const handleEnviar = () => {
        if (alternativaSelecionada === perguntas[perguntaAtual].resposta) {
            setMostrarRespostaCorreta(true);
            setTextoBotao("ACERTOU!!");
            adicionarPontos();

            setTimeout(() => {
                if (perguntaAtual === perguntas.length - 1) {
                    navigate("/ranking");
                } else {
                    setPerguntaAtual(perguntaAtual + 1);
                    setAlternativaSelecionada(null);
                    setMostrarRespostaCorreta(false);
                    setTextoBotao("ENVIAR");
                }
            }, 1000);
        } else {
            setAlternativaIncorreta(alternativaSelecionada);
            setMostrarRespostaCorreta(true);
            setTextoBotao("ERROU..");

            setTimeout(() => {
                if (perguntaAtual === perguntas.length - 1) {
                    navigate("/ranking");
                } else {
                    setPerguntaAtual(perguntaAtual + 1);
                    setAlternativaSelecionada(null);
                    setMostrarRespostaCorreta(false);
                    setTextoBotao("ENVIAR");
                }
            }, 1000);
        }
    }

    const calcularProgresso = () => {
        const arredondar = (num) => Math.round(num * 100) / 100;
        return arredondar((perguntaAtual / perguntas.length) * 100);
    }

    const perguntas = [
        {
            id: 1,
            pergunta: "Qual é o tema da palestra?",
            alternativas: [
                {id: 1, texto: "Tema 1"},
                {id: 2, texto: "Tema 2"},
                {id: 3, texto: "Tema 3"},
                {id: 4, texto: "Tema 4"}
            ],
            resposta: 2
        },
        {
            id: 2,
            pergunta: "Qual é o público-alvo da palestra?",
            alternativas: [
                {id: 1, texto: "Público 1"},
                {id: 2, texto: "Público 2"},
                {id: 3, texto: "Público 3"},
                {id: 4, texto: "Público 4"}
            ],
            resposta: 3
        },
        {
            id: 3,
            pergunta: "Qual é a duração da palestra?",
            alternativas: [
                {id: 1, texto: "30 minutos"},
                {id: 2, texto: "1 hora"},
                {id: 3, texto: "1 hora e 30 minutos"},
                {id: 4, texto: "2 horas"}
            ],
            resposta: 1
        }
    ];

    return (
        <BaseJogo>
            <BarraProgresso
                progress={calcularProgresso()}
                color="blue"
                backgroundColor="gray"
                height={10}
            />

            <TituloPergunta>{perguntas[perguntaAtual].pergunta}</TituloPergunta>

            <Alternativas
                alternativas={perguntas[perguntaAtual].alternativas}
                alternativaSelecionada={alternativaSelecionada}
                alternativaIncorreta={alternativaIncorreta}
                respostaCorreta={mostrarRespostaCorreta ? perguntas[perguntaAtual].resposta : null}
                handleSelecao={handleSelecao}
            />

            <Botao disabled={!alternativaSelecionada} type={"button"} onClick={handleEnviar}>
                {textoBotao}
            </Botao>

            <ValorAcerto
                pontos={20}
            />

            <Footer>
                <Logo/>
            </Footer>
        </BaseJogo>
    )
}

export default Palestrante;