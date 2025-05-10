import Base from "./Base"
import {useNavigate} from "react-router-dom";
import TituloPagina from "../components/TituloPagina/TituloPagina";
import Botao from "../components/Botao/Botao";
import PerfilInfo from "../components/PerfilInfo/PerfilInfo";
import {usePontuacao} from "../context/PontuacaoProvider";

const Perfil = () => {
    const navigate = useNavigate();
    const { resetarPontuacao } = usePontuacao();

    const verificarQuizzesFeitos = () => {
        const completedQuizzes = JSON.parse(localStorage.getItem("completedQuizzes")) || [];
        return completedQuizzes.length > 0;
    }

    const alterarPalestrandeIdPara0 = () => {
        const palestranteId = localStorage.getItem("palestrante-id");
        if (palestranteId) {
            localStorage.setItem("palestrante-id", 0);
        }
    }

    const handleRanking = () => {
        if (verificarQuizzesFeitos()){
            alterarPalestrandeIdPara0();
            navigate("/ranking");
        } else {
            alert("Você ainda não completou nenhum quiz.");
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("name");
        localStorage.removeItem("avatar");
        localStorage.removeItem("pontuacao");
        localStorage.removeItem("toolTipCronograma");
        localStorage.removeItem("id");
        localStorage.removeItem("palestrante");
        localStorage.removeItem("completedQuizzes");
        localStorage.removeItem("palestrante-id");
        resetarPontuacao();

        for (let i = 0; i < 5; i++) {
            localStorage.removeItem(`perguntaAtual-${i}`);
        }
        navigate("/");
    }

    return (
        <Base>
            <TituloPagina
                titulo="Perfil"
            />

            <PerfilInfo/>

            <Botao onClick={handleRanking}>
                RANKING GERAL
            </Botao>
            <Botao onClick={handleLogout}>
                LOGOUT
            </Botao>
        </Base>
    )
}

export default Perfil