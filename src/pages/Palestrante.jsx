import Base from "./Base";
import {useLocation} from "react-router-dom";

const Palestrante = () => {
    const location = useLocation();
    const { palestrante } = location.state;

    return (
        <Base>
            <h1>{palestrante.nome}</h1>
            <p>Horário de início: {palestrante.horario_inicio}</p>
            <p>Horário de fim: {palestrante.horario_fim}</p>
        </Base>
    )
}

export default Palestrante;