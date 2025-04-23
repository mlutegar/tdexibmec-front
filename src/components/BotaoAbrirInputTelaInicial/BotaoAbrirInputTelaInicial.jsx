import {BotaoAbrirInputTelaInicialStyle} from "./Style";
import InputTelaInicial from "../InputTelaInicial/InputTelaInicial";
import {useState} from "react";
import {BolaBranca} from "../../svgs/BolaBranca";
import {Seta} from "../../svgs/Seta";

const BotaoAbrirInputTelaInicial = () => {
    const [isInputVisible, setIsInputVisible] = useState(false);

    const handleButtonClick = () => {
        setIsInputVisible(!isInputVisible);
    }

    return (
        <BotaoAbrirInputTelaInicialStyle className={isInputVisible ? "visible" : "hidden"}>
            <Seta className={'botao'} onClick={handleButtonClick}/>

            <InputTelaInicial
                className={'input'}
            />
        </BotaoAbrirInputTelaInicialStyle>
    )
}

export default BotaoAbrirInputTelaInicial;