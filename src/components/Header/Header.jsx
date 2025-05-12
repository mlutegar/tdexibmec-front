import {useNavigate} from "react-router-dom";
import { HeaderStyle } from "./Style";
import {Logo} from "../../svgs/Logo";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import { getAvatar } from '../../Avatar';
import {useState} from "react";



const Header = ({ onPerfilClick }) => {
    const navigate = useNavigate();
    const [avatarId, setAvatarId] = useState(localStorage.getItem("avatar") || "homem3");

    const handlePerfil = () => {
        // Em vez de navegar, agora chamamos a função para abrir o modal
        if (onPerfilClick) {
            onPerfilClick();
        }
    }

    const handleLogoClick = () => {
        navigate("/cronograma");
    }

    return (
        <HeaderStyle>
            <Logo onClick={handleLogoClick} className={'logo'}/>
            <BotaoAvatar
                className={'perfil'}
                ativado={true}
                onClick={handlePerfil}
            >
                { getAvatar(avatarId) }
            </BotaoAvatar>
        </HeaderStyle>
    )
}

export default Header;