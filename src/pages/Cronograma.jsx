import Base from "./Base"
import {useNavigate} from "react-router-dom";
import CardCronograma from "../components/CardCronograma/CardCronograma";
import BreakTime from "../components/BreakTime/BreakTime";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import {useState} from "react";
import ToolTip from "../components/ToolTip/ToolTip";
import TelaPreta from "../components/TelaPreta/TelaPreta";
import MensagemToolTip2 from "../components/MensagemToolTip2/MensagemToolTip2";

const Cronograma = () => {
    const QUANTIDADE_MAXIMA_DE_TOOL_TIPS = 3;

    const navigate = useNavigate();

    const [quantidadeDeToolTipsClicados, setQuantidadeDeToolTipsClicados] = useState(0);
    const [ehPraMostrarToolTip, setEhPraMostrarToolTip] = useState(localStorage.getItem("toolTipCronograma") !== "true");

    const handleClick = (palestrante) => {
        navigate('/palestrante', {
            state: {
                palestrante: palestrante
            }
        });
    }

    const handleClickFinalizado = (palestrante) => {
        navigate('/ranking', {
            state: {
                palestrante: palestrante
            }
        });
    }

    const convidados = [
        {
            nome: "Convidado 1",
            horario_inicio: "13:00",
            horario_fim: "14:00",
        },
        {
            nome: "Convidado 2",
            horario_inicio: "17:00",
            horario_fim: "20:00",
        },
        {
            nome: "Convidado 3",
            horario_inicio: "20:00",
            horario_fim: "21:00",
        },
        {
            nome: "Convidado 4",
            horario_inicio: "21:00",
            horario_fim: "22:00",
        },
        {
            nome: "Convidado 5",
            horario_inicio: "22:00",
            horario_fim: "23:00",
        }
    ];

    const handleToolTipClick = () => {
        setQuantidadeDeToolTipsClicados(quantidadeDeToolTipsClicados + 1);

        const toolTip1 = document.querySelector("#toolTip1");
        const toolTip2 = document.querySelector("#toolTip2");
        const toolTip3 = document.querySelector("#toolTip3");

        const tituloCronograma = document.querySelector("#tituloCronograma");
        const cardCronograma1 = document.querySelector("#cardCronograma1");
        const cardCronograma2 = document.querySelector("#cardCronograma2");

        const telaPreta = document.querySelector(".telaPreta");

        if (quantidadeDeToolTipsClicados === QUANTIDADE_MAXIMA_DE_TOOL_TIPS - 2) {
            toolTip2.style.display = "none";
            toolTip3.style.display = "flex";
            cardCronograma1.style.zIndex = "0";
            cardCronograma2.style.zIndex = "9999";
            return;
        }

        if (quantidadeDeToolTipsClicados === QUANTIDADE_MAXIMA_DE_TOOL_TIPS - 1) {
            toolTip3.style.display = "none";
            telaPreta.style.display = "none";
            cardCronograma2.style.zIndex = "0";
            localStorage.setItem("toolTipCronograma", "true");
            setEhPraMostrarToolTip(false);
            return;
        }

        toolTip1.style.display = "none";
        toolTip2.style.display = "flex";
        tituloCronograma.style.zIndex = "0";
        cardCronograma1.style.zIndex = "9999";
    }

    const resetToolTip = () => {
        setEhPraMostrarToolTip(true);

        const toolTip1 = document.querySelector("#toolTip1");
        const toolTip2 = document.querySelector("#toolTip2");
        const toolTip3 = document.querySelector("#toolTip3");
        const tituloCronograma = document.querySelector("#tituloCronograma");

        const telaPreta = document.querySelector(".telaPreta");

        toolTip1.style.display = "flex";
        toolTip2.style.display = "none";
        toolTip3.style.display = "none";
        telaPreta.style.display = "flex";
        tituloCronograma.style.zIndex = "9999";

        setQuantidadeDeToolTipsClicados(0);
    }

    return (
        <Base>
            <div style={{display: ehPraMostrarToolTip ? "flex" : "none", position: "absolute", width: "320px"}}>
                <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={0.5} top={-19} id={"toolTip1"}>
                    Seja bem-vindo ao cronograma do TEDX. Aqui você consegue vê o horário de cada palestrante
                </ToolTip>
                <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={0.6} top={-14}
                         orientation={'direita'}
                         id={"toolTip2"}
                         style={{display: "none"}}>
                    <MensagemToolTip2/>
                </ToolTip>
                <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={0.6} top={-7} id={"toolTip3"}
                         orientation={'direita'}
                         style={{display: "none"}}>
                    Você pode clicar em ON para participar da dinâmica do palestrante. É um Quiz que no final te
                    permite
                    fazer uma pergunta a ele.
                </ToolTip>

                <TelaPreta
                    className={"telaPreta"}
                />
            </div>

            <TituloPagina
                titulo="Cronograma"
                subtitulo={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                fill="none" onClick={resetToolTip}>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                          d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM10 5.75C9.3787 5.75 8.875 6.25368 8.875 6.875C8.875 7.28921 8.5392 7.625 8.125 7.625C7.71079 7.625 7.375 7.28921 7.375 6.875C7.375 5.42525 8.5503 4.25 10 4.25C11.4497 4.25 12.625 5.42525 12.625 6.875C12.625 7.58584 12.3415 8.232 11.883 8.704C11.7907 8.7989 11.7027 8.8869 11.6187 8.9708C11.4029 9.1864 11.2138 9.3753 11.0479 9.5885C10.8289 9.8699 10.75 10.0768 10.75 10.25V11C10.75 11.4142 10.4142 11.75 10 11.75C9.5858 11.75 9.25 11.4142 9.25 11V10.25C9.25 9.5948 9.555 9.0644 9.8642 8.6672C10.0929 8.3733 10.3804 8.0863 10.6138 7.85346C10.6842 7.78321 10.7496 7.71789 10.807 7.65877C11.0046 7.45543 11.125 7.18004 11.125 6.875C11.125 6.25368 10.6213 5.75 10 5.75ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.4477 13 9 13.4477 9 14C9 14.5523 9.4477 15 10 15Z"
                          fill="white"/>
                </svg>}
                id={"tituloCronograma"}
                style={{zIndex: "9999"}}
            />

            <CardCronograma
                key={0}
                nomeConvidado={convidados[0].nome}
                horarioInicio={convidados[0].horario_inicio}
                horarioFim={convidados[0].horario_fim}
                onClick={handleClick.bind(null, convidados[0])}
                onClickFinalizado={handleClickFinalizado.bind(null, convidados[0])}
                id={"cardCronograma1"}
            />

            <CardCronograma
                key={1}
                nomeConvidado={convidados[1].nome}
                horarioInicio={convidados[1].horario_inicio}
                horarioFim={convidados[1].horario_fim}
                onClick={handleClick.bind(null, convidados[1])}
                onClickFinalizado={handleClickFinalizado.bind(null, convidados[1])}
                id={"cardCronograma2"}
            />

            <BreakTime/>

            {
                convidados.slice(2, 5).map((convidado, index) => (
                    <CardCronograma
                        key={index}
                        nomeConvidado={convidado.nome}
                        horarioInicio={convidado.horario_inicio}
                        horarioFim={convidado.horario_fim}
                        onClick={handleClick.bind(null, convidado)}
                        onClickFinalizado={handleClickFinalizado.bind(null, convidado)}
                    />
                ))
            }
        </Base>
    )
}

export default Cronograma