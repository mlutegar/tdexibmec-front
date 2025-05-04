import HeaderTelaInicial from "../components/HeaderTelaInicial/HeaderTelaInicial";
import SubitituloHome from "../components/SubitituloHome/SubitituloHome";
import BaseHome from "./BaseHome";
import SelecoesAvatar from "../components/SelecoesAvatar/SelecoesAvatar";
import Botao from "../components/Botao/Botao";
import {useNavigate} from "react-router-dom";

const EscolhaAvatar = () => {
    const navigate = useNavigate();

    const handleAvatarSelection = () => {
        navigate('/cronograma');
    }

    return (
        <BaseHome>
            <HeaderTelaInicial/>
            <SubitituloHome>
                Selecione o seu avatar
            </SubitituloHome>
            <SelecoesAvatar/>
            <Botao
                onClick={handleAvatarSelection}
            >
                SELECIONAR
            </Botao>
        </BaseHome>
    )
}

export default EscolhaAvatar