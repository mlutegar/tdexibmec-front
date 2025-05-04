import {BotaoAvatarStyle} from "./Style";

const BotaoAvatar = ({children, id, ativado=false, className, onClick, style}) => {
    const ativadoClassName = ativado ? "ativado" : "desativado";
    return (
        <BotaoAvatarStyle onClick={onClick} id={id} className={`${ativadoClassName} ${className}`} style={style}>
            {children}
        </BotaoAvatarStyle>
    )
}

export default BotaoAvatar;