import {BotaoStyle} from "./Style";

const Botao = ({type, disabled, children, onClick, className}) => {
    return (
        <BotaoStyle type={type} disabled={disabled} onClick={onClick} className={className}>
            {children}
        </BotaoStyle>
    )
}

export default Botao;