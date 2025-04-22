import {useNavigate} from "react-router-dom";
import { Top } from "./Style";



const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Aqui você pode adicionar a lógica de logout, como limpar o token ou redirecionar o usuário
        console.log("Logout realizado");
        navigate("/");
    }

    return (
        <Top>
            Logo
            <button type={"button"} onClick={handleLogout}>
                Sair
            </button>
        </Top>
    )
}

export default Header;