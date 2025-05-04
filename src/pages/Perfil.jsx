import Base from "./Base"
import {useNavigate} from "react-router-dom";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import Botao from "../components/Botao/Botao";
import PerfilInfo from "../components/PerfilInfo/PerfilInfo";

const Perfil = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("avatar");
        navigate("/");
    }

    return (
        <Base>
            <TituloPagina
                titulo="Perfil"
            />

            <PerfilInfo/>

            <Botao>
                RANKING GERAL
            </Botao>
            <Botao onClick={handleLogout}>
                LOGOUT
            </Botao>
        </Base>
    )
}

export default Perfil