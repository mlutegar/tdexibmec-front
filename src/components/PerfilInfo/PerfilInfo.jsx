import {PerfilInfoStyle} from "./Style";
import BotaoAvatar from "../BotaoAvatar/BotaoAvatar";
import {useEffect, useState} from "react";
import {getAvatar} from "../../Avatar";

const PerfilInfo = () => {
    const [avatarId, setAvatarId] = useState(localStorage.getItem("avatar") || "homem3");
    const [pontuacao, setPontuacao] = useState(0);

    useEffect(() => {
        const pontuacaoSalva = localStorage.getItem('pontuacao');
        if (pontuacaoSalva) {
            setPontuacao(parseInt(pontuacaoSalva));
        }
    }, [pontuacao]);

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
                        {pontuacao}
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