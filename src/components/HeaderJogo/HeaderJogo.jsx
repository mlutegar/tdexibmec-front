import {useNavigate} from "react-router-dom";
import { HeaderJogoStyle } from "./Style";
import Pontuacao from "../Pontuacao/Pontuacao";
import Perfil from "../Perfil/Perfil";



const HeaderJogo = () => {
    const navigate = useNavigate();

    const handleSairDoQuiz = () => {
        navigate("/cronograma");
    }

    return (
        <HeaderJogoStyle>
            <Perfil onClick={handleSairDoQuiz}/>
            <Pontuacao
                valor={520}
            />
        </HeaderJogoStyle>
    )
}

export default HeaderJogo;