import {BotaoStyle} from "./Style";

const Botao = ({type, disabled, children, onClick}) => {
    return (
        <BotaoStyle type={type} disabled={disabled} onClick={onClick}>
            {children}
        </BotaoStyle>
    )
}

export default Botao;