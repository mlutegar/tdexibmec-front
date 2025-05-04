import {PerfilStyle} from "./Style";
import {SetaSair} from "../../svgs/SetaSair";
import {useState} from "react";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import {getAvatar} from "../../Avatar";

const PerfilHeader = ({onClick}) => {
    const [nome, setNome] = useState(localStorage.getItem("name") || "Jogador");
    const [avatarId, setAvatarId] = useState(localStorage.getItem("avatar") || "homem3");

    return (
        <PerfilStyle>
            <BotaoAvatar
                className={'avatar'}
                ativado={true}
            >
                { getAvatar(avatarId) }
            </BotaoAvatar>

            <div className="perfil">
                {nome}
                <div className={"sair"} onClick={onClick}>
                    <SetaSair/>
                    Sair do Quiz
                </div>
            </div>
        </PerfilStyle>
    )
}

export default PerfilHeader;