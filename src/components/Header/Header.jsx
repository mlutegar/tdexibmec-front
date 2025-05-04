import {useNavigate} from "react-router-dom";
import { HeaderStyle } from "./Style";
import {Logo} from "../../svgs/Logo";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import { getAvatar } from '../../Avatar';
import {useState} from "react";



const Header = () => {
    const navigate = useNavigate();
    const [avatarId, setAvatarId] = useState(localStorage.getItem("avatar") || "homem3");

    const handlePerfil = () => {
        navigate("/perfil");
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