import Base from "./Base"
import {useNavigate} from "react-router-dom";
import CardCronograma from "../components/CardCronograma/CardCronograma";
import BreakTime from "../components/BreakTime/BreakTime";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import {useEffect, useState} from "react";

const Cronograma = () => {
    const navigate = useNavigate();
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        console.log("Horário atual:", getFormattedTime());
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentTime(now);
            console.log("Horário atualizado:", getFormattedTime());
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
        console.log("Card clicado!");

        navigate('/palestrante', {
            state: {
                palestrante: palestrante
            }
        });
    }

    const convidados = [
        {
            nome: "Convidado 1",
            horario_inicio: "10:00",
            horario_fim: "11:00",
        },
        {
            nome: "Convidado 2",
            horario_inicio: "11:00",
            horario_fim: "12:00",
        },
        {
            nome: "Convidado 3",
            horario_inicio: "12:00",
            horario_fim: "13:00",
        },
        {
            nome: "Convidado 4",
            horario_inicio: "13:00",
            horario_fim: "14:00",
        },
        {
            nome: "Convidado 5",
            horario_inicio: "14:00",
            horario_fim: "15:00",
        }
    ];


    return (
        <Base>
            <TituloPagina
                titulo="Cronograma"
                subtitulo="Clique no palestrante da vez para participar da dinâmica!"
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