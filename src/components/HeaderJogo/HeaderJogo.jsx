import {useNavigate} from "react-router-dom";
import { HeaderJogoStyle } from "./Style";
import Pontuacao from "../Pontuacao/Pontuacao";
import PerfilHeader from "../PerfilHeader/PerfilHeader";
import {usePontuacao} from "../../context/PontuacaoProvider";

const HeaderJogo = () => {
    const navigate = useNavigate();

    const { pontuacao } = usePontuacao();

    const handleSairDoQuiz = () => {
        navigate("/cronograma");
    }

    return (
        <HeaderJogoStyle>
            <PerfilHeader onClick={handleSairDoQuiz}/>
            <Pontuacao
                valor={pontuacao} // Não precisa mais do parseInt pois já vem como número
            />
        </HeaderJogoStyle>
    )
}

export default HeaderJogo;