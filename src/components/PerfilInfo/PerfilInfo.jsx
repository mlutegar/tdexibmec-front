import {PerfilInfoStyle} from "./Style";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import {useState} from "react";
import {getAvatar} from "../../Avatar";

const PerfilInfo = () => {
    const [avatarId, setAvatarId] = useState(localStorage.getItem("avatar") || "homem3");
    return (
        <PerfilInfoStyle>
            <div className={"perfil"}>
                <BotaoAvatar
                    ativado={true}
                >
                    {getAvatar(avatarId)}
                </BotaoAvatar>

                <div>
                    <div>
                        Pontuação
                    </div>
                    <div>
                        1000
                    </div>
                </div>
            </div>

            <div>
                Michel Lutegar
            </div>
        </PerfilInfoStyle>
    )
}

export default PerfilInfo;