import Base from "./Base"
import {useNavigate} from "react-router-dom";

const Cronograma = () => {
    const navigate = useNavigate();

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
            {convidados.map((convidado, index) => (
                <div key={index}>
                    <h2>{convidado.nome}</h2>
                    <p>Início: {convidado.horario_inicio}</p>
                    <p>Fim: {convidado.horario_fim}</p>
                </div>
            ))}

        </Base>
    )
}

export default Cronograma