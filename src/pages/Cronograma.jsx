import Base from "./Base"
import {useNavigate} from "react-router-dom";
import CardCronograma from "../components/CardCronograma/CardCronograma";
import BreakTime from "../components/BreakTime/BreakTime";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import {useEffect, useState} from "react";
import ToolTip from "../components/ToolTip/ToolTip";
import TelaPreta from "../components/TelaPreta/TelaPreta";

const Cronograma = () => {
    const QUANTIDADE_MAXIMA_DE_TOOL_TIPS = 3;

    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());
    const [quantidadeDeToolTipsClicados, setQuantidadeDeToolTipsClicados] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    const getFormattedTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const handleClick = (palestrante) => {
        navigate('/palestrante', {
            state: {
                palestrante: palestrante
            }
        });
    }

    const convidados = [
        {
            nome: "Convidado 1",
            horario_inicio: "14:00",
            horario_fim: "15:00",
        },
        {
            nome: "Convidado 2",
            horario_inicio: "15:00",
            horario_fim: "16:00",
        },
        {
            nome: "Convidado 3",
            horario_inicio: "16:00",
            horario_fim: "17:00",
        },
        {
            nome: "Convidado 4",
            horario_inicio: "19:00",
            horario_fim: "20:00",
        },
        {
            nome: "Convidado 5",
            horario_inicio: "21:00",
            horario_fim: "22:00",
        }
    ];

    const handleToolTipClick = () => {
        setQuantidadeDeToolTipsClicados(quantidadeDeToolTipsClicados + 1);

        const toolTip1 = document.querySelector("#toolTip1");
        const toolTip2 = document.querySelector("#toolTip2");
        const toolTip3 = document.querySelector("#toolTip3");

        const telaPreta = document.querySelector(".telaPreta");

        toolTip1.style.display = "none";
        toolTip2.style.display = "block";

        if (quantidadeDeToolTipsClicados === QUANTIDADE_MAXIMA_DE_TOOL_TIPS - 2) {
            toolTip2.style.display = "none";
            toolTip3.style.display = "block";
        }

        if (quantidadeDeToolTipsClicados === QUANTIDADE_MAXIMA_DE_TOOL_TIPS - 1) {
            toolTip1.style.display = "none";
            toolTip2.style.display = "none";
            toolTip3.style.display = "none";
            telaPreta.style.display = "none";
        }
    }

    return (
        <Base>
            <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={2.5} top={12} id={"toolTip1"}>
                Seja bem-vindo ao cronograma do TEDX. Aqui você consegue vê o horário de cada palestrante
            </ToolTip>

            <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={3.5} top={18} id={"toolTip2"}
                     style={{display: "none"}}>
                Aqui você consegue vê o Status do palestrante. Pode ser:
                <div>
                    <div className={"status"} style={{backgroundColor: "#00FF00"}}/>
                    <span>Já aconteceu.</span>
                </div>
                <div>
                    <div className={"status"} style={{backgroundColor: "#00FF00"}}/>
                    <span>Acontecendo.</span>
                </div>
                <div>
                    <div className={"status"} style={{backgroundColor: "#00FF00"}}/>
                    <span>Ainda vai acontecer.</span>
                </div>
            </ToolTip>

            <ToolTip className={"toolTip"} onClick={handleToolTipClick} left={2.5} top={26} id={"toolTip3"}
                     style={{display: "none"}}>
                Você pode clicar em ON para participar da dinâmica do palestrante. É um Quiz que no final te permite fazer uma pergunta a ele.
            </ToolTip>

            <TelaPreta
                className={"telaPreta"}
            />


            <TituloPagina
                titulo="Cronograma"
            />
            {convidados.slice(0, 2).map((convidado, index) => (
                <CardCronograma
                    key={index}
                    nomeConvidado={convidado.nome}
                    horarioInicio={convidado.horario_inicio}
                    horarioFim={convidado.horario_fim}
                    onClick={handleClick.bind(null, convidado)}
                />
            ))}

            <BreakTime/>

            {convidados.slice(2, 5).map((convidado, index) => (
                <CardCronograma
                    key={index}
                    nomeConvidado={convidado.nome}
                    horarioInicio={convidado.horario_inicio}
                    horarioFim={convidado.horario_fim}
                    onClick={handleClick.bind(null, convidado)}
                />
            ))}
        </Base>
    )
}

export default Cronograma