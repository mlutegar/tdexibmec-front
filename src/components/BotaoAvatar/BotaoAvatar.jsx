import {BotaoAvatarStyle} from "./Style";

const BotaoAvatar = ({children, id, ativado=false}) => {
    const className = ativado ? "ativado" : "desativado";
    return (
        <BotaoAvatarStyle id={id} className={className}>
            {children}
        </BotaoAvatarStyle>
    )
}

export default BotaoAvatar;